import Hero from "@/components/home/Hero";
import Bestseller from "@/components/home/Bestseller";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={""}>
        <Bestseller />
      </Suspense>
    </div>
  );
}
