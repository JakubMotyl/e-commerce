import ShopFilters from "./ShopFilters";
import ShopItems from "./ShopItems";

export default function Hero() {
  return (
    <main className="py-default">
      <h1 className="text-4xl md:text-5xl font-semibold text-terracotta text-left w-full xl:px-16 2xl:px-20">
        Shop
      </h1>
      <div className="w-full h-px bg-black rounded md:my-8 my-6"></div>
      <section className="px-default">
        <ShopFilters />
      </section>
    </main>
  );
}
