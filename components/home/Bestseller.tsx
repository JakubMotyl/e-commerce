import ProductCard from "../shared/ProductCard";
import { getBestSellers } from "@/lib/api";

export default async function Bestseller() {
  const products = await getBestSellers();
  // console.log(products);
  return (
    <section className="px-default py-default flex flex-col md:gap-14 gap-10">
      <p className="text-black font-semibold xl:text-5xl md:text-4xl sm:text-3xl text-2xl">
        OWN BEST SELLERS
      </p>
      <div className="grid w-full gap-8 grid-cols-[repeat(auto-fit,minmax(300px,400px))] justify-center sm:auto-rows-[30rem] auto-rows-[24rem]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
