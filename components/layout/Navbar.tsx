"use client";

import { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isCopied, setIsCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const coupon = "HELLO2026";

  const NAV_LINKS = [
    { title: "Home", href_link: "#" },
    { title: "Shop", href_link: "shop" },
    { title: "About", href_link: "about" },
    { title: "Shopping Bag" },
  ];

  const copyCoupon = () => {
    navigator.clipboard.writeText(coupon);
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
            15% OFF everything. Code:{" "}
            <button
              className="font-bold cursor-pointer"
              onClick={() => copyCoupon()}
            >
              {coupon}
            </button>
          </p>
        </div>
        <header className="px-default flex justify-between py-5 lg:border-none border-b border-b-white">
          {/* Logo */}
          <div>
            <span className="uppercase font-logo lg:text-9xl text-white lg:leading-24">
              OWN
            </span>
          </div>

          {/* Nav List MD+ Devices */}
          <ul className="lg:flex hidden items-center gap-4 h-fit font-medium text-bone">
            {NAV_LINKS.map((item, id) => (
              <li key={id}>
                {item.title === "Shopping Bag" ? (
                  <>
                    <button className="nav-link">
                      {item.title} <span>(0)</span>
                    </button>
                  </>
                ) : (
                  <Link href={`/${item.href_link}`} className="nav-link">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Nav List MD- Devices */}
          <ul className="lg:hidden flex items-center gap-4 h-fit font-medium text-bone">
            <li>
              <Link href={"#"} className="nav-link">
                Shopping Bag <span>(0)</span>
              </Link>
            </li>
            <li className="nav-link" onClick={() => setIsOpen(true)}>
              Menu
            </li>
            <div
              className={`fixed top-0 right-0 transition-all duration-500 ease-in-out h-dvh bg-graphite px-20 py-10 
              ${
                isOpen
                  ? "translate-x-0 opacity-100 visible pointer-events-auto"
                  : "translate-x-full opacity-0 invisible pointer-events-none"
              }`}
            >
              <div className="absolute top-3 left-3">
                <IoClose
                  size={24}
                  className="cursor-pointer hover:scale-95 active:scale-95 duration-200"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <ul className="flex flex-col gap-4 items-center">
                {NAV_LINKS.filter((item) => item.title !== "Shopping Bag").map(
                  (item, id) => (
                    <li key={id}>
                      <Link href={`/${item.href_link}`} className="nav-link">
                        {item.title}
                      </Link>
                    </li>
                  ),
                )}
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
