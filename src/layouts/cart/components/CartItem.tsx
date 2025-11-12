import { useEffect, useState } from "react";
import BookModel from "../../../models/BookModel";
import numberFormat from "../../util/NumberFormat";
import BookImageModel from "../../../models/BookImageModel";
import { getAllImages } from "../../../api/BookImageAPI";

interface ProductCart {
    book: BookModel,
    quantity: number
    deleteProduct: (id:number) => void
}
export default function CartItem({ book, quantity, deleteProduct}: ProductCart) {

    const [bookImage, setBookImage] = useState<BookImageModel[]>([])
    
    useEffect(
        () => {
            getAllImages(book.id).then(
                (image) => {
                    setBookImage(image);
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            )
        }, [book.id]
    )

    const handleDeleteProduct = () => {
        deleteProduct(book.id)
    }

    return (
        <div className="row ms-4 me-4">
            <div className="col-3 d-flex justify-content-center align-items-center">
                {
                    bookImage[0] && <img src={bookImage[0].data} alt="product.png" className="img-fluid" style={{transform: 'scale(1.75)'}}/>
                }
            </div>
            <div className="col-8 mb-2">
                <li style={{ fontWeight: 'bold' }}>{book.name}</li>
                <li className="mb-2">{book.author}</li>
                <span className="border p-1 rounded-pill ps-2 pe-2" style={{ backgroundColor: '#F3F5F6' }}>{quantity}</span>
                <li className="mt-2">{numberFormat(book.price)}đ</li>

            </div>
            <div className="col-1  d-flex justify-content-center align-items-center">
                <button className="btn" style={{ fontSize: "small" , backgroundColor: '#F3F5F6'}} onClick={handleDeleteProduct}><i className="fas fa-times"></i></button>
            </div>
            <hr />
        </div>
    );
}