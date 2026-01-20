import { getBestSellers } from "@/lib/api";
import OpinionSlider from "./OpinionSlider";

export default async function Opinions() {
  const products = await getBestSellers();
  return (
    <section className="px-default py-default flex flex-col md:gap-14 gap-10">
      <p className="text-black font-semibold xl:text-5xl md:text-4xl sm:text-3xl text-2xl">
        OWN BEST SELLERS
      </p>
      <OpinionSlider products={products} />
    </section>
  );
}
