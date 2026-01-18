import Hero from "@/components/home/Hero";
import Bestseller from "@/components/home/Bestseller";
import ProductSpotlight from "@/components/home/ProductSpotlight";
import Opinions from "@/components/home/Opinions";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bestseller />
      <ProductSpotlight />
      <Opinions />
    </div>
  );
}
