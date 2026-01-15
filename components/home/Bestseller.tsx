import ProductCard from "../shared/ProductCard";
import { getBestSellers } from "@/lib/api";

export default async function Bestseller() {
  const products = await getBestSellers();
  // console.log(products);
  // Na duzych 3 i tak zmniejszac stopniowo, na ekranach gdzie jest 1 lub 2 itemy to dodac slide btn
  return (
    <section className="px-default py-default flex flex-col gap-4">
      <p className="text-black font-semibold text-4xl">ONSKN BEST SELLERS</p>
      <div className="grid w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
