"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Hero from "@/components/checkout/Hero";

export default function CheckoutPage() {
    return (
        <>
            <Navbar homePage={false} />
            <Hero />
            <Footer />
        </>
    );
}
