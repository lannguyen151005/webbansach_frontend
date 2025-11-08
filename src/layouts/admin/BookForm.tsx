import React, { FormEvent, useState } from "react";
import RequireAdmin from "./RequireAdmin";

const BookForm: React.FC = () => {

    const [book, setBook] = useState(
        {
            id: 0,
            name: "",
            price: 0,
            listedPrice: 0,
            description: "",
            quantity: 0,
            author: "",
            isbn: "",
            averageRating: 0
        }
    )

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        fetch('http://localhost:8080/books',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(book)
            }
        ).then(
            (response) => {
                if (response.ok) {
                    alert('Added successfully!');
                    setBook(
                        {
                            id: 0,
                            name: "",
                            price: 0,
                            listedPrice: 0,
                            description: "",
                            quantity: 0,
                            author: "",
                            isbn: "",
                            averageRating: 0
                        }
                    )
                } else {
                    alert('Error!')
                }
            }
        )
    }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-body-tertiary">
            <div className="border shadow rounded-5 mx-auto p-5 m-5" style={{ maxWidth: '960px', width: '90%' }}>
                <div className="mb-4">
                    <h2>ADDING FORM</h2>
                </div>
                <form onSubmit={handleSubmit} className="form text-start">
                    <div className="row">
                        <div className="col-8">
                            <label htmlFor="name" className="">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={book.name}
                                onChange={(e) => setBook({ ...book, name: e.target.value })}
                                required
                            />
                            <label htmlFor="author">Author's name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author"
                                value={book.author}
                                onChange={(e) => setBook({ ...book, author: e.target.value })}
                                required
                            />
                            <label htmlFor="isbn">ISBN</label>
                            <input
                                type="text"
                                className="form-control"
                                id="isbn"
                                value={book.isbn}
                                onChange={(e) => setBook({ ...book, isbn: e.target.value })}
                                required
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                value={book.price}
                                onChange={(e) => setBook({ ...book, price: parseFloat(e.target.value) })}
                                required
                            />

                            <label htmlFor="listedPrice">Listed price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="listedPrice"
                                value={book.listedPrice}
                                onChange={(e) => setBook({ ...book, listedPrice: parseFloat(e.target.value) })}
                                required
                            />

                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                value={book.quantity}
                                onChange={(e) => setBook({ ...book, quantity: parseInt(e.target.value) })}
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                style={{height: '100px'}}
                                id="description"
                                value={book.description}
                                onChange={(e) => setBook({ ...book, description: e.target.value })}
                                required
                            ></textarea>
    
                        </div>
                    </div>
                    <input
                        type="hidden"
                        id="id"
                        value={book.id}
                    />











                    <button className="btn btn-primary form-control mt-3" type="submit">Save</button>

                </form>
            </div>

        </div>
    );
}

const BookForm_Admin = RequireAdmin(BookForm);
export default BookForm_Admin;