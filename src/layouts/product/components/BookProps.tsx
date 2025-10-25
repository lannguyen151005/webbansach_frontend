import React, { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import BookImageModel from "../../../models/BookImageModel";
import { getAllImages } from "../../../api/BookImageAPI";
import { Link } from "react-router-dom";

interface BookProps {
    book: BookModel;
}

const BookProps: React.FC<BookProps> = ({ book }) => {

    const bookId = book.id;

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
        <div className="col-3 mt-4">
            <div className="card" style={{ width: '18rem' }}>
                <div style={{ height: '200px' }}>
                    {
                        imageList[0] &&
                        imageList[0].data &&
                        <Link to={`/books/${book.id}`}>
                            <img src={imageList[0].data} className="card-img-top" alt={book.name} height={'200px'} />
                        </Link>
                    }
                </div>
                <div className="text-start">
                    <div className="card-body">
                        <Link to={`/books/${book.id}`} style={{textDecoration: 'none'}}>
                            <h5 className="card-title">{book.name}</h5>
                        </Link>
                        <p className="card-text">{book.description}</p>
                        <p className="card-text">
                            <span className="text-decoration-line-through me-3">{book.listedPrice}</span>
                            <span className="fw-bold">{book.price}</span>
                        </p>
                    </div>

                    <div className="card-body">
                        <div className="row" role="group">
                            <div className="col-6">
                                <a href="#" className="btn btn-secondary btn-block">
                                    <i className="fas fa-heart fa-lg"></i>
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="#" className="btn btn-danger btn-block">
                                    <i className="fas fa-shopping-cart fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default BookProps;