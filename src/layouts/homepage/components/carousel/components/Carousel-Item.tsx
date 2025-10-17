import React, { useEffect, useState } from "react";
import BookModel from "../../../../../models/BookModel";
import BookImageModel from "../../../../../models/BookImageModel";
import { getAllImages } from "../../../../../api/BookImageAPI";
interface BookProps {
    book: BookModel;
}
const Carousel_Item: React.FC<BookProps> = ({ book }) => {

    const [imageList, setImageList] = useState<BookImageModel[]>([]);
    const bookId = book.id;
    useEffect(() => {
        getAllImages(bookId).then(
            imageData => {
                setImageList(imageData);
            }
        )
    }, []   
    )


    const itemClass = `carousel-item${bookId === 1 ? " active" : ""}`;
    return (
        <div className={itemClass} data-bs-interval="10000">
            <div className="row align-items-center">
                <div className="col-5">
                    {
                        imageList[0] && imageList[0].data &&
                        <img src={imageList[0].data} className="float-end" alt="..." style={{ width: '200px' }} />
                    }
                </div>
                <div className="col-7 text-start">
                    <h5>{book.name}</h5>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    );
}
export default Carousel_Item