import React, { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import BookProps from "./components/BookProps";
import { findBook, getAllBooks } from "../../api/BookAPI";
import { Pagination } from "../util/Pagination";

interface BookListProps {
    keyword: string;
    genreId: number;
}

function List({ keyword, genreId }: BookListProps) {


    const [bookList, setBookList] = useState<BookModel[]>([]);
    const [loadingData, setLoadingData] = useState<boolean>(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalBook, setTotalBook] = useState(0);


    useEffect(() => {
        if (keyword === "" && genreId ==0) {
            getAllBooks(currentPage - 1).then(
                bookData => {
                    setBookList(bookData.result);
                    setTotalPage(bookData.totalPages);
                    setLoadingData(false);
                }
            ).catch(
                error => {
                    setError(error.message);
                }
            );
        } else {
            findBook(keyword, genreId).then(
                bookData => {
                    setBookList(bookData.result);
                    setTotalPage(bookData.totalPages);
                    setLoadingData(false);
                }
            ).catch(
                error => {
                    setError(error.message);
                }
            );
        }
    }, [currentPage, keyword, genreId] //tu dong goi lai khi currentPage thay doi
    )

    const paginate = (page: number) => {
        setCurrentPage(page);
    }

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

    if(bookList.length===0){
        return(
            <div>
                <h1>Not found!</h1>
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
            <Pagination currentPage={currentPage} totalPage={totalPage} paginate={paginate} />
        </div>
    );
}
export default List;