import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/shop/Hero";
import { getBestSellers } from "@/lib/api";

export default async function page() {
  const products = await getBestSellers();
  return (
    <>
      <Navbar homePage={false} />
      <Hero products={products} />
    </>
  );
}
