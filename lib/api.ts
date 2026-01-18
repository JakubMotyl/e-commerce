import type { Product } from "@/types";

export const getBestSellers = async (): Promise<Product[]> => {
  const res = await fetch("https://dummyjson.com/products/category/beauty");
  const data = await res.json();
  return data.products.slice(0, 3);
};
