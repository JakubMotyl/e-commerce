import type { Product } from "@/types";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="h-108 w-full flex flex-col rounded overflow-hidden">
      <Link href={`/product/${product.id}`} className="h-[85%]">
        <img
          src={product.image_link}
          alt={product.name}
          className="h-full w-full object-center"
        />
      </Link>
      <div className="flex-1 flex flex-col gap-1">
        <div className="w-full flex-1">
          <button className="w-full h-full bg-amber-700 hover:bg-amber-700/90 cursor-pointer duration-200 text-white">
            Add to cart
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black font-semibold md:text-sm text-xs">
            {product.name}
          </p>
          <p className="text-black font-medium md:text-sm text-xs">
            {product.price} $
          </p>
        </div>
      </div>
    </div>
  );
}
