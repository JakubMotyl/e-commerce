"use client";
import ContactForm from "./ContactForm";
import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function Hero() {
    const discount = useCartStore((state) => state.discount);
    const productsList = useCartStore((state) => state.productsList);
    const { subtotal, finalTotal } = useCartStore(
        useShallow((state) => state.getTotals()),
    );

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <section className="px-default py-default flex flex-col gap-6 xl:gap-12 min-h-[80dvh]">
            <h1 className="text-3xl md:text-5xl font-semibold text-terracotta text-left font-logo uppercase tracking-widest">
                Checkout
            </h1>

            <div className="flex lg:flex-row flex-col gap-10 xl:gap-16 w-full items-start mt-4">
                <div className="lg:w-2/3 w-full flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl font-semibold uppercase font-logo text-pure-black border-b border-b-terracotta/30 pb-4">
                            Shipping Details
                        </h2>
                        <ContactForm />
                    </div>
                </div>

                <div className="lg:w-1/3 w-full lg:sticky top-28 bg-white border border-terracotta/30 p-6 xl:p-8 flex flex-col gap-6 shadow-sm">
                    <h2 className="text-xl font-semibold uppercase font-logo text-pure-black">
                        Order Summary
                    </h2>

                    <div className="flex flex-col gap-4 border-b border-b-terracotta/30 pb-6 max-h-60 overflow-y-auto pr-2">
                        {productsList.map((product) => (
                            <div
                                key={product.product.id}
                                className="flex justify-between items-start text-sm"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold text-pure-black uppercase">
                                        {product.product.title}
                                    </span>
                                    <span className="text-gray text-xs">
                                        Quantity: {product.quantity}
                                    </span>
                                </div>
                                <span className="font-medium text-pure-black">
                                    ${product.product.price}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 border-b border-b-terracotta/30 pb-6">
                        <div className="flex justify-between text-pure-black text-sm">
                            <span className="font-medium">Subtotal</span>
                            <span className="font-semibold">
                                {isMounted ? `$${subtotal}` : "loading..."}
                            </span>
                        </div>

                        {discount !== 0 && (
                            <div className="flex justify-between text-sm text-green-700">
                                <span className="font-medium">Discount</span>
                                <span className="font-semibold">
                                    -${discount}
                                </span>
                            </div>
                        )}

                        <div className="flex justify-between text-pure-black text-sm">
                            <span className="font-medium">Shipping</span>
                            <span className="font-semibold">Free</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-end text-pure-black">
                        <span className="text-base font-semibold uppercase">
                            Total
                        </span>
                        <span className="text-2xl font-bold font-logo">
                            {isMounted ? `$${finalTotal}` : "loading..."}
                        </span>
                    </div>

                    <button
                        className="w-full bg-terracotta text-white py-4 uppercase font-semibold text-sm hover:bg-pure-black transition-colors duration-300 cursor-pointer"
                        type="submit"
                        form="checkout-form"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </section>
    );
}
