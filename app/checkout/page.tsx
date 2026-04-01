"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
// TODO: Import useCartStore and useRouter

export default function CheckoutPage() {
    // TODO: Zaciągnij dane z Zustanda (productsList, subtotal, discount, finalTotal)
    // TODO: Przygotuj stany dla formularza (np. form, setForm)
    // TODO: Przygotuj funkcję handlePlaceOrder z isProcessing

    return (
        <>
            <Navbar homePage={false} />
            <section className="px-default py-default flex flex-col gap-6 xl:gap-12 min-h-[80dvh]">
                <h1 className="text-3xl md:text-5xl font-semibold text-terracotta text-left font-logo uppercase tracking-widest">
                    Checkout
                </h1>

                <div className="flex lg:flex-row flex-col gap-10 xl:gap-16 w-full items-start mt-4">
                    {/* LEWA STRONA - FORMULARZ */}
                    <div className="lg:w-2/3 w-full flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-xl font-semibold uppercase font-logo text-pure-black border-b border-b-terracotta/30 pb-4">
                                Shipping Details
                            </h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5 md:col-span-2">
                                    <label className="text-xs font-semibold uppercase text-pure-black">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full border border-terracotta/30 p-3 text-sm outline-none focus:border-terracotta text-pure-black placeholder:text-gray/50 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold uppercase text-pure-black">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full border border-terracotta/30 p-3 text-sm outline-none focus:border-terracotta text-pure-black placeholder:text-gray/50 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold uppercase text-pure-black">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full border border-terracotta/30 p-3 text-sm outline-none focus:border-terracotta text-pure-black placeholder:text-gray/50 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5 md:col-span-2 mt-4">
                                    <label className="text-xs font-semibold uppercase text-pure-black">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Street Address"
                                        className="w-full border border-terracotta/30 p-3 text-sm outline-none focus:border-terracotta text-pure-black placeholder:text-gray/50 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold uppercase text-pure-black">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="w-full border border-terracotta/30 p-3 text-sm outline-none focus:border-terracotta text-pure-black placeholder:text-gray/50 transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold uppercase text-pure-black">
                                        Postal Code
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="ZIP / Postal Code"
                                        className="w-full border border-terracotta/30 p-3 text-sm outline-none focus:border-terracotta text-pure-black placeholder:text-gray/50 transition-colors"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* PRAWA STRONA - PODSUMOWANIE (READ ONLY) */}
                    <div className="lg:w-1/3 w-full lg:sticky top-28 bg-white border border-terracotta/30 p-6 xl:p-8 flex flex-col gap-6 shadow-sm">
                        <h2 className="text-xl font-semibold uppercase font-logo text-pure-black">
                            Order Summary
                        </h2>

                        {/* LISTA PRODUKTÓW */}
                        <div className="flex flex-col gap-4 border-b border-b-terracotta/30 pb-6 max-h-60 overflow-y-auto pr-2">
                            {/* TODO: Zrób tutaj mapowanie po productsList z Zustanda */}
                            {/* Przykład pojedynczego itemu: */}
                            <div className="flex justify-between items-start text-sm">
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold text-pure-black uppercase">
                                        Product Name Example
                                    </span>
                                    <span className="text-gray text-xs">
                                        Qty: 2
                                    </span>
                                </div>
                                <span className="font-medium text-pure-black">
                                    $40.00
                                </span>
                            </div>
                        </div>

                        {/* PODSUMOWANIE KOSZTÓW */}
                        <div className="flex flex-col gap-3 border-b border-b-terracotta/30 pb-6">
                            <div className="flex justify-between text-pure-black text-sm">
                                <span className="font-medium">Subtotal</span>
                                <span className="font-semibold">$0.00</span>
                            </div>

                            {/* Pokaż tylko jeśli jest zniżka */}
                            <div className="flex justify-between text-sm text-green-700">
                                <span className="font-medium">Discount</span>
                                <span className="font-semibold">-$0.00</span>
                            </div>

                            <div className="flex justify-between text-pure-black text-sm">
                                <span className="font-medium">Shipping</span>
                                <span className="font-semibold">Free</span>
                            </div>
                        </div>

                        {/* TOTAL */}
                        <div className="flex justify-between items-end text-pure-black">
                            <span className="text-base font-semibold uppercase">
                                Total
                            </span>
                            <span className="text-2xl font-bold font-logo">
                                $0.00
                            </span>
                        </div>

                        {/* TODO: Podepnij funkcję onClick i stan loading */}
                        <button className="w-full bg-terracotta text-white py-4 uppercase font-semibold text-sm hover:bg-pure-black transition-colors duration-300 cursor-pointer">
                            Place Order
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
