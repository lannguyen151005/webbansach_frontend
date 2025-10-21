import React, { useEffect, useState } from "react";
import Carousel_Item from "./components/Carousel-Item";
import BookModel from "../../../../models/BookModel";
import { get3Books} from "../../../../api/BookAPI";


function Carousel() {


    const [bookList, setBookList] = useState<BookModel[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        get3Books().then(
            bookData => {
                setBookList(bookData.result);
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
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">

                <div className="carousel-inner">
                    {
                        bookList.map((book, index) => (
                            <Carousel_Item key={book.id} book={book} index={index}/>
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