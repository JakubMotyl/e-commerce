"use client";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import ProductsList from "./ProductsList";
import PaymentDetails from "./PaymentDetails";

export default function Hero() {
    const productsList = useCartStore((state) => state.productsList);
    return (
        <section className="px-default py-default flex flex-col gap-6 xl:gap-12 min-h-[80dvh]">
            <h1 className="text-3xl md:text-5xl font-semibold text-terracotta text-left font-logo uppercase tracking-widest">
                Shopping Bag
            </h1>
            {/* Tutaj zmieniamy layout na proportions 2/3 i 1/3 oraz dodajemy items-start dla sticky */}
            {productsList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 gap-6 border-y border-y-terracotta/30">
                    <p className="text-gray text-lg">
                        Your bag is currently empty.
                    </p>
                    <Link
                        href="/shop"
                        className="bg-pure-black text-white px-8 py-3 uppercase text-sm font-semibold hover:bg-terracotta transition-colors duration-300"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="flex lg:flex-row flex-col gap-10 xl:gap-16 w-full items-start">
                    <div className="lg:w-2/3 w-full">
                        <ProductsList />
                    </div>
                    <div className="lg:w-1/3 w-full lg:sticky top-28">
                        <PaymentDetails />
                    </div>
                </div>
            )}
        </section>
    );
}
