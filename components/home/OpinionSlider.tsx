"use client";

import OpinionCard from "../shared/OpinionCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import type { Product } from "@/types";
import { useRef } from "react";

interface OpinionSliderProps {
  products: Product[];
}

export default function OpinionSlider({ products }: OpinionSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  function scrollLeft() {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }
  function scrollRight() {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <FiArrowLeft className="h-6 w-6 cursor-pointer" onClick={scrollLeft} />
        <FiArrowRight
          className="h-6 w-6 cursor-pointer"
          onClick={scrollRight}
        />
      </div>
      <div className="opinions-container" ref={sliderRef}>
        {products.map((product) => (
          <OpinionCard key={product.id} reviews={product.reviews} />
        ))}
      </div>
    </div>
  );
}
