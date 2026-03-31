"use client";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function Navbar({ homePage }: { homePage: boolean }) {
    const [isCopied, setIsCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const itemsQuantity = useCartStore((state) => state.productsList.length);
    const promotedCoupon = useCartStore((state) => state.promotedCoupon);

    const NAV_LINKS = [
        { title: "Home", href_link: "" },
        { title: "Shop", href_link: "shop" },
        { title: "About", href_link: "about" },
        { title: "Shopping Bag", href_link: "cart" },
    ];

    const copyCoupon = () => {
        navigator.clipboard.writeText(promotedCoupon);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };

    return (
        <>
            <nav className="overflow-hidden z-50">
                <div className="bg-pure-black text-white text-center py-1.5">
                    <p className="lg:text-base sm:text-sm text-xs font-light">
                        10$ Coupon |{" "}
                        <button
                            className="font-semibold cursor-pointer"
                            onClick={() => copyCoupon()}
                        >
                            {promotedCoupon}
                        </button>
                    </p>
                </div>
                <header className="px-default flex justify-between py-5 lg:border-none border-b border-b-white">
                    {/* Logo */}
                    <div>
                        <Link
                            href={"/"}
                            className={`uppercase font-logo lg:text-9xl ${homePage ? "text-white" : "text-terracotta"} lg:leading-24`}
                        >
                            OWN
                        </Link>
                    </div>

                    {/* Nav List MD+ Devices */}
                    <ul className="lg:flex hidden items-center gap-4 h-fit">
                        {NAV_LINKS.map((item, id) => (
                            <li key={id}>
                                {item.title === "Shopping Bag" ? (
                                    <>
                                        <Link
                                            href={`/${item.href_link}`}
                                            className={`nav-link ${homePage ? "text-white after:bg-white" : "text-black after:bg-black"}`}
                                        >
                                            {item.title}{" "}
                                            <span>({itemsQuantity})</span>
                                        </Link>
                                    </>
                                ) : (
                                    <Link
                                        href={`/${item.href_link}`}
                                        className={`nav-link ${homePage ? "text-white after:bg-white" : "text-black after:bg-black"}`}
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Nav List MD- Devices */}
                    <ul className="lg:hidden flex items-center gap-4 h-fit">
                        <Link
                            href={`/cart`}
                            className={`nav-link ${homePage ? "text-white after:bg-white" : "text-black after:bg-black"}`}
                        >
                            Shopping Bag <span>({itemsQuantity})</span>
                        </Link>
                        <li
                            className={`nav-link ${homePage ? "text-white after:bg-white" : "text-black after:bg-black"}`}
                        >
                            <button
                                onClick={() => setIsOpen(true)}
                                className="nav-link"
                            >
                                Menu
                            </button>
                        </li>
                        <div
                            className={`fixed z-100 top-0 right-0 transition-all duration-300 ease-in-out h-dvh w-full bg-terracotta flex items-center justify-center
              ${
                  isOpen
                      ? "translate-x-0 opacity-100 visible pointer-events-auto"
                      : "translate-x-full opacity-0 invisible pointer-events-none"
              }`}
                        >
                            <div className="absolute top-5 left-5">
                                <IoClose
                                    size={48}
                                    className="cursor-pointer text-white"
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>
                            <ul className="flex flex-col divide-y divide-white items-center w-full">
                                {NAV_LINKS.filter(
                                    (item) => item.title !== "Shopping Bag",
                                ).map((item, id) => (
                                    <li
                                        key={id}
                                        className="w-full inline-block text-center py-4 h-full text-white hover:text-terracotta hover:bg-white cursor-pointer"
                                    >
                                        <Link
                                            href={`/${item.href_link}`}
                                            className="nav-link "
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ul>
                </header>
            </nav>

            {/* Coupon message */}
            <div
                className={`fixed z-20 bg-green-600 text-white bottom-5 py-2 px-3 rounded md:tex-base text-sm transition-all duration-200
        ${isCopied ? "right-5 opacity-100" : "-right-10 opacity-0"}`}
            >
                <p className="font-medium">Coupon copied!</p>
            </div>
        </>
    );
}
