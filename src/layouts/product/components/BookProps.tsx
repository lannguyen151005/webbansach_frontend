import React from "react";
import Book from "../../../models/Book";

interface BookProps {
    book: Book;
}

const BookProps: React.FC<BookProps> = ({ book }) => {
    return (
        <div className="col-3 mt-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src={book.imageUrl} className="card-img-top" alt="..." />
                <div className="text-start">
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.decription}</p>
                        <p className="card-text">
                            <span className="text-decoration-line-through me-3">{book.originalPrice}</span>
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