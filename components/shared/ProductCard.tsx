import type { Product } from "@/types";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col rounded overflow-hidden mx-auto">
      <Link
        href={`/product/${product.id}`}
        className="h-[85%] bg-white duration-300 transition-all hover:bg-terracotta/40 overflow-hidden"
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-center hover:scale-105 duration-300 transition-all"
        />
      </Link>
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="w-full flex-1">
          <button className="w-full h-full bg-terracotta hover:bg-black cursor-pointer transition-all duration-300 text-white">
            Select
          </button>
        </div>
        <div className="flex items-center justify-between whitespace-nowrap">
          <p className="text-black uppercase md:text-base text-sm font-logo">
            {product.title}
          </p>
          <p className="text-black md:text-base text-sm font-logo">
            {product.price} $
          </p>
        </div>
      </div>
    </div>
  );
}
