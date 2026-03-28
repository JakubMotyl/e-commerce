"use client";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";

export default function PaymentDetails() {
    const productsList = useCartStore((state) => state.productsList);

    const [couponCode, setCouponCode] = useState("");

    const subtotal = productsList.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);

    if (productsList.length === 0) return null;

    return (
        <div className="bg-white border border-terracotta/30 p-6 xl:p-8 flex flex-col gap-6 w-full shadow-sm">
            <h2 className="text-xl font-semibold uppercase font-logo text-pure-black">
                Order Summary
            </h2>

            <div className="flex flex-col gap-4 border-b border-b-terracotta/30 pb-6">
                <div className="flex justify-between text-pure-black text-sm">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between text-gray text-sm">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                </div>

                {/* --- MIEJSCE NA KUPON --- */}
                <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-t-terracotta/10">
                    <label
                        htmlFor="coupon"
                        className="text-xs font-semibold uppercase text-pure-black"
                    >
                        Discount Code
                    </label>
                    <div className="flex h-10">
                        <input
                            type="text"
                            id="coupon"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter code"
                            className="flex-1 border border-terracotta/50 border-r-0 px-3 text-sm outline-none focus:border-terracotta text-pure-black placeholder:text-gray/50 transition-colors"
                        />
                        <button className="bg-pure-black text-white px-5 text-xs font-semibold uppercase hover:bg-terracotta transition-colors duration-300 cursor-pointer">
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-end text-pure-black">
                <span className="text-base font-semibold uppercase">Total</span>
                <span className="text-2xl font-bold font-logo">
                    ${subtotal.toFixed(2)}
                </span>
            </div>

            <button className="w-full bg-terracotta text-white py-4 uppercase font-semibold text-sm hover:bg-pure-black transition-colors duration-300 cursor-pointer">
                Proceed to Checkout
            </button>

            <p className="text-xs text-gray text-center mt-2">
                Taxes and discount codes calculated at checkout.
            </p>
        </div>
    );
}
