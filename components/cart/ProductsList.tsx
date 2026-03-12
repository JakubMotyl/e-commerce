/* eslint-disable @next/next/no-img-element */
"use client"
import { useCartStore } from "@/store/useCartStore"
import { useState } from "react";

export default function ProductsList() {
    const [quantity, setQuantity] = useState(1);
    const productsList = useCartStore((state) => state.productsList);
    return (
        <>
            {productsList ? (
                <div className="cart-box min-h-[50dvh]">
                    {productsList.map(item => (
                        <div key={item.product.id} className="border-t border-t-terracotta py-3 w-full md:h-30 h-28 flex items-center gap-4">
                            <div className="h-full w-auto aspect-square">
                                <img src={item.product.images[0]} alt={item.product.title} className="h-full w-full" />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="flex justify-between">
                                    <p className="cart-box-text">{item.product.title}</p>
                                    <p className="cart-box-text">{item.product.price}</p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="text-xl text-pure-black cursor-pointer w-6 h-6 border border-terracotta flex items-center justify-center"
                                    >
                                        -
                                    </button>
                                    <span className="cart-box-text w-10 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="text-xl text-pure-black cursor-pointer w-6 h-6 border border-terracotta flex items-center justify-center"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                <div className="cart-box">not found</div>
            )}
        </>
    )
}
