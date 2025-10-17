import React, { useEffect, useState } from "react";
import Carousel_Item from "./components/Carousel-Item";
import BookModel from "../../../../models/BookModel";
import { getAllBooks } from "../../../../api/BookAPI";


function Carousel() {


    const [bookList, setBookList] = useState<BookModel[]>([]);

    useEffect(() => {
        getAllBooks().then(
            bookData => {
                setBookList(bookData);
            }
        )
    }, []
    )

    const newList = bookList.slice(0,3);

    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">

                <div className="carousel-inner">
                    {
                        newList.map((book)=>(
                            <Carousel_Item key={book.id} book={book} />
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
export default Carousel