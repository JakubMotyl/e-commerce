import productsData from "@/lib/products.json";
import type { Product } from "@/types";

export const getBestSellers = async (): Promise<Product[]> => {
  const data = productsData as Product[];
  const selectedProducts = data.filter((item) =>
    [996, 995, 993].includes(item.id)
  );

  return selectedProducts;
};
