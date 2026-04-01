import Hero from "@/components/home/Hero";
import Bestseller from "@/components/home/Bestseller";
import ProductSpotlight from "@/components/home/ProductSpotlight";
import Opinions from "@/components/home/Opinions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function Home() {
    return (
        <div>
            <div className="h-dvh relative bg-[url('/images/hero_image.webp')] bg-no-repeat bg-cover flex flex-col">
                <div className="absolute inset-0 bg-black/30"></div>
                <Navbar homePage={true} />
                <Hero />
            </div>
            <Bestseller />
            <ProductSpotlight />
            <Opinions />
            <Footer />
        </div>
    );
}
