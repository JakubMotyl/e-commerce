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

  function getScrollAmount() {
    if (!sliderRef.current) return 0;

    const firstChild = sliderRef.current.children[0] as HTMLElement;
    const containerStyle = window.getComputedStyle(sliderRef.current);
    const gap = parseFloat(containerStyle.gap) || 0;

    return firstChild.offsetWidth + gap;
  }

  function scrollLeft() {
    if (sliderRef.current) {
      const scrollAmount = getScrollAmount();
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  }
  function scrollRight() {
    if (sliderRef.current) {
      const scrollAmount = getScrollAmount();
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  const globalTopReviews = products
    .flatMap((product) => product.reviews)
    .filter((review) => review.rating === 5);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <FiArrowLeft
          className="h-6 w-6 cursor-pointer active:scale-95"
          onClick={scrollLeft}
        />
        <FiArrowRight
          className="h-6 w-6 cursor-pointer active:scale-95"
          onClick={scrollRight}
        />
      </div>
      <div className="opinions-container" ref={sliderRef}>
        <OpinionCard reviews={globalTopReviews} />
      </div>
    </div>
  );
}
