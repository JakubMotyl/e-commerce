"use client";

import { useState } from "react";
import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";
import type { Product } from "@/types";

type HeroProps = {
  products: Product[];
};

export default function Hero({ products }: HeroProps) {
  const [sortProducts, setSortProducts] = useState("Default");

  return (
    <main className="py-default">
      <h1 className="text-4xl md:text-5xl font-semibold text-terracotta text-left w-full xl:px-16 2xl:px-20 px-5">
        Shop
      </h1>
      <div className="w-full h-px bg-black rounded md:my-8 my-6"></div>
      <section className="px-default flex flex-col gap-5">
        <ShopFilters
          sortProducts={sortProducts}
          setSortProducts={setSortProducts}
        />
        <ShopItems sortProducts={sortProducts} />
      </section>
    </main>
  );
}
