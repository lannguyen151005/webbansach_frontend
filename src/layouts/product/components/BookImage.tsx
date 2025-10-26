import React, { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import BookImageModel from "../../../models/BookImageModel";
import { getAllImages } from "../../../api/BookImageAPI";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface BookImageInterface {
    bookId: number;
}

const BookImage: React.FC<BookImageInterface> = ({ bookId }) => {

    const id: number = bookId;

    const [imageList, setImageList] = useState<BookImageModel[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllImages(bookId).then(
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
    return (
        <div className="row">
            <div className="col-12">
                <Carousel showArrows={true} showIndicators={true}>
                    {
                        imageList.map((image, index) => (
                            <div key={index}>
                                <img src={image.data} alt={image.name} style={{maxWidth: '250px'}} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div >
    );
}

export default BookImage;