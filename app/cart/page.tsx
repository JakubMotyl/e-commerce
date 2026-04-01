import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/cart/Hero";
import Footer from "@/components/layout/Footer";

export default function page() {
    return (
        <>
            <Navbar homePage={false} />
            <Hero />
            <Footer />
        </>
    );
}
