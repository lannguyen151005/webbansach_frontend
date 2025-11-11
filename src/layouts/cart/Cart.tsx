import { useEffect } from "react"
import { useCartStore } from "../store/CartStore"

export default function Cart() {
    const cartStore = useCartStore(state => state.list)
    return (
        <>
            {
                cartStore.map((prod) => (
                    <>
                        <div className="" key={prod.bookId}>
                            <div>
                                <h4>{prod.book.name} {prod.quantity}</h4>
                            </div>
                        </div>
                    </>
                ))
            }
        </>
    )
}