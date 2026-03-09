import type { Product } from "@/types";

export const getBestSellers = async (): Promise<Product[]> => {
  const res = await fetch("https://dummyjson.com/products/category/beauty");
  const data = await res.json();
  return data.products;
};

export const getProductById = async (id: string) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  }
  catch (err) {
    console.error(err)
  }
}