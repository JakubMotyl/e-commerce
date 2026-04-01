import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/about/Hero";
import Footer from "@/components/layout/Footer";

function page() {
    return (
        <>
            <Navbar homePage={false} />
            <Hero />
            <Footer />
        </>
    );
}

export default page;
