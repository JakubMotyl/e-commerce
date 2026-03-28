/* eslint-disable @next/next/no-img-element */
"use client";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";

export default function ProductsList() {
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const productsList = useCartStore((state) => state.productsList);
    const removeProduct = useCartStore((state) => state.removeProduct);

    return (
        <div className="flex flex-col w-full">
            {productsList.length > 0 && (
                <div className="flex flex-col w-full border-t border-t-terracotta">
                    {productsList.map((product) => (
                        <div
                            key={product.product.id}
                            className="w-full py-6 flex sm:flex-row flex-col items-center sm:items-start gap-6 border-b border-b-terracotta/30"
                        >
                            <div className="h-32 sm:h-40 bg-white aspect-square shrink-0">
                                <img
                                    src={product.product.images[0]}
                                    alt={product.product.title}
                                    className="h-full w-full object-contain p-2"
                                />
                            </div>
                            <div className="flex flex-col justify-between w-full h-full sm:py-2 gap-4 sm:gap-0">
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-pure-black font-logo uppercase md:text-lg text-base font-semibold">
                                            {product.product.title}
                                        </p>
                                        <p className="text-gray text-sm">
                                            Size: 30ml
                                        </p>
                                    </div>
                                    <p className="text-pure-black font-semibold">
                                        $
                                        {(
                                            product.quantity *
                                            product.product.price
                                        ).toFixed(2)}
                                    </p>
                                </div>

                                <div className="flex items-end justify-between w-full mt-auto">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-xs text-gray uppercase font-semibold">
                                            Quantity
                                        </span>
                                        <div className="flex items-center border border-pure-black w-fit h-9">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(
                                                        product.product.id,
                                                        "decrease",
                                                    )
                                                }
                                                className="text-xl text-pure-black cursor-pointer w-8 h-full flex items-center justify-center hover:bg-highlight transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="text-sm font-medium w-8 text-center">
                                                {product.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(
                                                        product.product.id,
                                                        "increase",
                                                    )
                                                }
                                                className="text-xl text-pure-black cursor-pointer w-8 h-full flex items-center justify-center hover:bg-highlight transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        className="text-gray hover:text-terracotta transition-colors duration-200 cursor-pointer flex items-center gap-1 text-sm uppercase font-semibold"
                                        onClick={() =>
                                            removeProduct(product.product.id)
                                        }
                                    >
                                        <FiTrash2 className="sm:text-base text-2xl" />
                                        <span className="sm:inline-block hidden">
                                            Remove
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
