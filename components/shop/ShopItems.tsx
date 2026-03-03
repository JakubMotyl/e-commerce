import type { Product } from "@/types";
import ProductCard from "../shared/ProductCard";

interface ShopItemsProps {
  products: Product[];
}

function ShopItems({ products }: ShopItemsProps) {
  return (
    <div className="grid w-full gap-8 grid-cols-[repeat(auto-fit,minmax(300px,400px))] justify-center sm:auto-rows-[30rem] auto-rows-[24rem]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ShopItems;
