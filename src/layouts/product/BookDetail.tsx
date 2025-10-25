import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import BookImageModel from "../../models/BookImageModel";
import { getAllImages } from "../../api/BookImageAPI";
import { Link, useParams } from "react-router-dom";
import { getBookById } from "../../api/BookAPI";


const BookDetail: React.FC = () => {

    const { bookId } = useParams();

    let bookIdNumber = 0;
    try {
        bookIdNumber = parseInt(bookId + '');
        if (Number.isNaN(bookIdNumber)) {
            bookIdNumber = 0;
        }
    } catch (error) {
        bookIdNumber = 0;
        console.error("Error", error);
    }

    const [book, setBook] = useState<BookModel | null>(null);
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(null);



    useEffect(
        () => {
            getBookById(bookIdNumber).then(
                (bookData) => {
                    setBook(bookData);
                    setLoadingData(false);
                }
            ).catch(
                (error) => {
                    setError(error.message);
                    setLoadingData(false);
                }
            )
        }, [bookId]
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

    if (!book) {
        return (
            <div>
                <h1>Book does not exist!</h1>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-4">
                    {book.id}
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-8">
                            <h1>{book.name}</h1>
                            <hr />
                            <h4>{book.averageRating}</h4>
                            <h4>
                                <span className="me-4" style={{ textDecoration: "line-through" }}>{book.listedPrice}</span>
                                <span>{book.price}</span>
                            </h4>
                            <hr />
                            <div className="row">
                                <div className="col-4">
                                    <span style={{fontWeight: "bold"}}>
                                        Description:
                                    </span>
                                </div>
                                <div className="col-8">
                                    {book.description}
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="col-4">
                            ORDER
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                REVIEW
            </div>
        </div >
    );
}

export default BookDetail;