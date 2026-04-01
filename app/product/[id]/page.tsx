import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/product/Hero";
import { getProductById } from "@/lib/api";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const productId = parseInt(id);
    if (isNaN(productId) || productId > 5 || productId < 1) {
        notFound();
    }

    const product = await getProductById(id);

    return (
        <>
            <Navbar homePage={false} />
            <Hero product={product} />
            <Footer />
        </>
    );
}
