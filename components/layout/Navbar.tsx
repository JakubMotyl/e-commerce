"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isCopied, setIsCopied] = useState(false);

  const coupon = "HELLO2026";

  const NAV_LINKS = ["Home", "Shop", "Our Story", "Shopping Bag"];

  const copyCoupon = () => {
    navigator.clipboard.writeText(coupon);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <>
      <nav className="fixed inset-0 max-h-25">
        <div className="bg-pure-black text-white text-center py-1.5">
          <p className="md:text-base sm:text-sm text-xs font-light">
            15% OFF everything. Code:{" "}
            <button
              className="font-bold cursor-pointer"
              onClick={() => copyCoupon()}
            >
              {coupon}
            </button>
          </p>
        </div>
        <header className="px-default flex justify-between py-5 xl:border-none border-b-2 border-b-white">
          {/* Logo */}
          <div>
            <span className="uppercase tracking-widest font-logo xl:text-9xl text-white xl:leading-24">
              ONSK<span className="inline-block scale-x-[-1]">N</span>
            </span>
          </div>

          {/* Nav List MD+ Devices */}
          <ul className="md:flex hidden items-center gap-4 h-fit font-medium text-bone">
            {NAV_LINKS.map((link, id) => (
              <li key={id}>
                {link === "Shopping Bag" ? (
                  <>
                    <Link href="#" className="nav-link">
                      {link}
                      <span>(0)</span>
                    </Link>
                  </>
                ) : (
                  <Link href="#" className="nav-link">
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Nav List MD- Devices */}
          <ul className="md:hidden flex items-center gap-4 h-fit font-medium text-bone">
            {NAV_LINKS.map((link, id) => (
              <li key={id}>
                {link === "Shopping Bag" ? (
                  <>
                    <Link href="#" className="nav-link">
                      {link}
                      <span>(0)</span>
                    </Link>
                  </>
                ) : (
                  <Link href="#" className="nav-link">
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </header>
      </nav>

      {/* Coupon message */}
      <div
        className={`fixed bg-gray text-white bottom-5 py-2 px-3 rounded md:tex-base text-sm transition-all duration-200
        ${isCopied ? "right-5 opacity-100" : "-right-10 opacity-0"}`}
      >
        <p className="font-medium">Coupon copied!</p>
      </div>
    </>
  );
}
