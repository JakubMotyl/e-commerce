import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/cart/Hero";

export default function page() {
    return (
        <>
            <Navbar homePage={false} />
            <Hero />
        </>
    )
}
