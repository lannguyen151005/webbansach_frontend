import React, { useEffect, useState } from "react";
import BookModel from "../../../../../models/BookModel";
import BookImageModel from "../../../../../models/BookImageModel";
import { getAllImages } from "../../../../../api/BookImageAPI";
interface BookProps {
    book: BookModel;
    index: number;
}
const Carousel_Item: React.FC<BookProps> = ({ book, index }) => {

    const [imageList, setImageList] = useState<BookImageModel[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllImages(book.id).then(
            imageData => {
                setImageList(imageData);
                setLoadingData(false);
            }
        ).catch(
            error => {
                setError(error.message);
            }
        )
    }, []
    )
   
    if (loadingData) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Error detected! ({error})</h1>
            </div>
        );
    }

    const itemClass = `carousel-item${index === 0 ? " active" : ""}`;
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