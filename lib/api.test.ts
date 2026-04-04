import { expect, vi, describe, test, beforeEach } from "vitest";
import { getBestSellers, getProductById } from "./api";

global.fetch = vi.fn();

describe("getBestSellers Unit Test", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("Should call correct URL and extract products array", async () => {
        const mockApiResponse = {
            products: [
                { id: 1, title: "Testowy Krem" },
                { id: 2, title: "Szampon" },
            ],
            total: 2,
            skip: 0,
            limit: 5,
        };

        (fetch as any).mockResolvedValue({
            ok: true,
            status: 200,
            json: async () => mockApiResponse,
        });

        const products = await getBestSellers();

        expect(fetch).toHaveBeenCalledWith(
            "https://dummyjson.com/products/category/beauty?limit=5",
        );

        expect(products).toEqual([
            { id: 1, title: "Testowy Krem" },
            { id: 2, title: "Szampon" },
        ]);
    });

    test("Should throw an error when API request fails", async () => {
        (fetch as any).mockRejectedValue(new Error("Network connection lost"));

        await expect(getBestSellers()).rejects.toThrow(
            "Unable to fetch the data",
        );
    });
});

describe("getProductById Unit Test", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("Should call correct URL and extract product details based on id", async () => {
        const mockupProduct = { id: 1, title: "Testowy Krem" };

        (fetch as any).mockResolvedValue({
            json: async () => mockupProduct,
            ok: true,
            status: 200,
        });

        const product = await getProductById("1");

        expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products/1");

        expect(product).toEqual(mockupProduct);
    });

    test("Should throw an error when API request fails", async () => {
        (fetch as any).mockRejectedValue(new Error("Network connection lost"));

        await expect(getProductById("1")).rejects.toThrow(
            "Unable to fetch the data",
        );
    });
});
