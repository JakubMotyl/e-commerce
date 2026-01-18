import type { Product } from "@/types";

export const getBestSellers = async (): Promise<Product[]> => {
  const res = await fetch("https://dummyjson.com/products/category/beauty");
  const data = await res.json();
  console.log(data.products);
  return data.products;
};
