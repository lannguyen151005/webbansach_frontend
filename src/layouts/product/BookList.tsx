import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import BookProps from "./components/BookProps";
import { getAllBooks } from "../../api/BookAPI";

const List: React.FC = () => {

    const [bookList, setBookList] = useState<BookModel[]>([]);
    const [loadingData, setLoadingData] = useState<boolean>(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllBooks().then(
            bookData => {
                setBookList(bookData);
                setLoadingData(false);
            }
        ).catch(
            error => {
                setError(error.message);
            }
        );
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

        <div className="container">
            <div className="row mt-4">
                {
                    bookList.map((book) => (
                        <BookProps key={book.id} book={book} />
                    )
                    )
                }
            </div>
        </div>
    );
}
export default List;