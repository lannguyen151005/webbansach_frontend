import { useEffect } from "react"
import { useCartStore } from "../store/CartStore"

export default function Cart() {
    const cartStore = useCartStore()
    return (
        <>
            {
                cartStore.list.map((prod, index) => (
                    <>
                        <div className="" key={index}>
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