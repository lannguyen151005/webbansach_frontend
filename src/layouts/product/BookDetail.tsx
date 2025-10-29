import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { useParams } from "react-router-dom";
import { getBookById } from "../../api/BookAPI";
import BookImage from "./components/BookImage";
import BookReview from "./components/BookReview";
import renderRating from "../util/StarRating";
import numberFormat from "../util/NumberFormat";


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
    const [quantity, setQuantity] = useState(1);

    const quantityUp = () => {

        const stockQuantity = (book && book.quantity ? book.quantity : 0);

        if (quantity < stockQuantity) {
            setQuantity(quantity + 1);
        }
    }

    const quantityDown = () => {
        if (quantity > 2) {
            setQuantity(quantity - 1);
        }
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value);
        const stockQuantity = (book && book.quantity ? book.quantity : 0);

        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= stockQuantity) {
            setQuantity(newQuantity);
        }
    }

    const handleBuyNow = () => {

    }

    const handleAddToCart = () => {

    }

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
                    <BookImage bookId={bookIdNumber} />
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-8 text-start">
                            <h1>{book.name}</h1>
                            <hr />
                            <h4>{renderRating(book.averageRating ? book.averageRating : 0)}</h4>
                            <h4>
                                <span className="me-4" style={{ textDecoration: "line-through" }}>{book.listedPrice}</span>
                                <span>{numberFormat(book.price)} đ</span>
                            </h4>
                            <hr />
                            <div className="row">
                                <div className="col-4">
                                    <span style={{ fontWeight: "bold" }}>
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
                            <div>
                                <div className="mb-2 text-start">
                                    <b>Quantity:</b>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-outline-secondary me-2" onClick={quantityDown}>-</button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        className="form-control text-center"
                                        onChange={handleQuantityChange}
                                    />
                                    <button className="btn btn-outline-secondary ms-2" onClick={quantityUp}>+</button>
                                </div>
                                <div className="mt-2">
                                    Subtotal<br />
                                    {
                                        book.price &&
                                        <h4>{numberFormat(quantity * book.price)} đ</h4>
                                    }
                                </div>
                                <button type="button" className="btn btn-primary mt-3 form-control" onClick={handleBuyNow}>Buy now</button>
                                <button type="button" className="btn btn-secondary mt-2 form-control" onClick={handleAddToCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-4 text-start">
                <BookReview bookId={bookIdNumber} />
            </div>
        </div >
    );
}

export default BookDetail;