"use client";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";

export default function PaymentDetails() {
    const productsList = useCartStore((state) => state.productsList);
    const applyDiscount = useCartStore((state) => state.applyDiscount);
    const appliedCode = useCartStore((state) => state.appliedCode);
    const discount = useCartStore((state) => state.discount);

    const [isCouponLoading, setIsCouponLoading] = useState(false);
    const [error, setError] = useState("");
    const [couponCode, setCouponCode] = useState("");

    const subtotal = productsList.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);

    const finalTotal = Math.max(0, subtotal - discount).toFixed(2);

    if (productsList.length === 0) return null;

    const handleApplyCoupon = async () => {
        setIsCouponLoading(true);
        setError("");
        try {
            const response = await fetch("/api/coupons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code: couponCode }),
            });

            if (!response.ok) {
                setError("This code does not exist");
                setCouponCode("");
                return;
            }

            const codeData = await response.json();

            if (codeData.name === appliedCode) {
                setError("This code is already applied!");
                setCouponCode("");
                return;
            }
            applyDiscount(codeData.discount, codeData.name);
            setCouponCode("");
        } catch (err) {
            console.error(err);
        } finally {
            setIsCouponLoading(false);
        }
    };

    return (
        <div className="bg-white border border-terracotta/30 p-6 xl:p-8 flex flex-col gap-6 w-full shadow-sm">
            <h2 className="text-xl font-semibold uppercase font-logo text-pure-black">
                Order Summary
            </h2>

            <div className="flex flex-col gap-4 border-b border-b-terracotta/30 pb-6">
                <div className="flex justify-between text-pure-black lg:text-base text-sm">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                    </span>
                </div>

                {/* IF COUPON CODE IS APPLIED */}
                {discount > 0 && (
                    <div className="flex justify-between items-center text-sm lg:text-base bg-green-50 p-2 rounded-sm border border-green-200">
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-green-700">
                                Discount
                            </span>
                            <button
                                onClick={() => {
                                    applyDiscount(0, "");
                                    setError("");
                                }}
                                className="text-[10px] bg-green-200 text-green-800 px-1.5 py-0.5 rounded-full hover:bg-red-200 hover:text-red-800 transition-colors duration-200 uppercase font-bold cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                        <span className="font-semibold text-green-700">
                            -${discount.toFixed(2)}
                        </span>
                    </div>
                )}

                <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-t-terracotta/10">
                    <label
                        htmlFor="coupon"
                        className="lg:text-sm text-xs font-semibold uppercase text-pure-black"
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
                            className="w-full border border-terracotta/50 border-r-0 px-3 text-sm outline-none focus:border-terracotta text-pure-black placeholder:text-gray/50 transition-colors"
                        />
                        <button
                            className="bg-pure-black text-white px-5 text-xs font-semibold uppercase hover:bg-terracotta disabled:bg-gray-400 transition-colors cursor-pointer"
                            onClick={handleApplyCoupon}
                            disabled={isCouponLoading || !couponCode}
                        >
                            {isCouponLoading ? "Checking..." : "Apply"}
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-500 text-xs mt-1 font-medium">
                            {error}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex justify-between items-end text-pure-black">
                <span className="text-base font-semibold uppercase">Total</span>
                <span className="text-2xl font-bold font-logo">
                    ${finalTotal}
                </span>
            </div>

            <button className="w-full bg-terracotta text-white py-4 uppercase font-semibold text-sm hover:bg-pure-black transition-colors duration-300 cursor-pointer">
                Proceed to Checkout
            </button>
        </div>
    );
}
