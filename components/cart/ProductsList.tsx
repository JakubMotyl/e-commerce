/* eslint-disable @next/next/no-img-element */
"use client"
import { useCartStore } from "@/store/useCartStore"

export default function ProductsList() {
    const updateQuantity = useCartStore(state => state.updateQuantity)
    const productsList = useCartStore((state) => state.productsList);
    const removeProduct = useCartStore(state => state.removeProduct)
    return (
        <>
            {productsList.length > 0 ? (
                <div className="cart-box min-h-[50dvh]">
                    {productsList.map(product => (
                        <div key={product.product.id} className="border-t border-t-terracotta py-3 w-full md:h-30 h-28 flex items-center gap-4">
                            <div className="h-full w-auto aspect-square">
                                <img src={product.product.images[0]} alt={product.product.title} className="h-full w-full" />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex justify-between">
                                    <p className="cart-box-text">{product.product.title}</p>
                                    <p className="cart-box-text">{product.product.price}</p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => updateQuantity(product.product.id, 'decrease')}
                                        className="text-xl text-pure-black cursor-pointer w-6 h-6 border border-terracotta flex items-center justify-center"
                                    >
                                        -
                                    </button>
                                    <span className="cart-box-text w-10 text-center">{product.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(product.product.id, 'increase')}
                                        className="text-xl text-pure-black cursor-pointer w-6 h-6 border border-terracotta flex items-center justify-center"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => removeProduct(product.product.id)}>
                                remove
                            </button>
                        </div>
                    ))}

                </div>
            ) : (
                <div className="cart-box">not found</div>
            )}
        </>
    )
}
