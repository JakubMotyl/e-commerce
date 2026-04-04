import type { Product } from "@/types";

export const getBestSellers = async (): Promise<Product[]> => {
    try {
        const res = await fetch(
            "https://dummyjson.com/products/category/beauty?limit=5",
        );

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data.products;
    } catch (err) {
        throw new Error("Unable to fetch the data");
    }
};

export const getProductById = async (id: string) => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error("Unable to fetch the data");
    }
};
