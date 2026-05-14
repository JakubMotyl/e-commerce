import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageProps {
    searchParams: Promise<{
        orderId?: string;
    }>;
}

export default async function CheckoutSuccessPage({ searchParams }: PageProps) {
    const resolvedParams = await searchParams;
    const orderNumber = resolvedParams.orderId || "N/A";

    return (
        <>
            <Navbar homePage={false} />
            <main className="flex min-h-[70vh] flex-col items-center justify-center px-default text-center py-20">
                <h2 className="font-logo text-6xl md:text-8xl lg:text-9xl text-terracotta uppercase tracking-tighter">
                    Thank You
                </h2>
                <p className="mt-6 text-lg md:text-xl font-medium text-pure-black uppercase tracking-widest border-b border-terracotta/30 pb-4">
                    Your order is confirmed.
                </p>
                <div className="mt-6 flex flex-col gap-2 text-gray text-sm md:text-base max-w-md">
                    <p>
                        Order{" "}
                        <span className="font-bold text-pure-black">
                            #{orderNumber}
                        </span>{" "}
                        has been placed successfully.
                    </p>
                    <p>
                        We will send you an email with shipping details and
                        tracking information shortly.
                    </p>
                </div>
                <Link
                    href="/"
                    className="mt-10 bg-pure-black text-white px-10 py-4 uppercase font-semibold text-sm hover:bg-terracotta transition-colors duration-300"
                >
                    Return to Shop
                </Link>
            </main>
            <Footer />
        </>
    );
}
