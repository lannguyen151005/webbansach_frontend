import React from "react";
import BookProps from "./components/BookProps";
import Book from "../../models/Book";

const List: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            decription: 'Description for Book1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../image/books/sample.png',
        },
        {
            id: 2,
            title: 'Book 2',
            decription: 'Description for Book 2',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../image/books/sample.png',
        },
        {
            id: 3,
            title: 'Book 3',
            decription: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../image/books/sample.png',
        },
        {
            id: 4,
            title: 'Book 3',
            decription: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../image/books/sample.png',
        },
        {
            id: 5,
            title: 'Book 3',
            decription: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../image/books/sample.png',
        },
        {
            id: 6,
            title: 'Book 3',
            decription: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../image/books/sample.png',
        },
        {
            id: 7,
            title: 'Book 3',
            decription: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../image/books/sample.png',
        },
        {
            id: 8,
            title: 'Book 3',
            decription: 'Description for Book 3',
            originalPrice: 50000,
            price: 45000,
            imageUrl: './../../image/books/sample.png',
        }
        
    ];
    return (
        <div className="container">
            <div className="row mt-4">
                {
                    books.map((book) => (
                        <BookProps key={book.id} book={book} />
                    )
                    )
                }
           
            </div>
        </div>
    );
}
export default List;