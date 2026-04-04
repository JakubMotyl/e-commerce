import { beforeEach, describe, test } from "vitest";
import { useCartStore } from "./useCartStore";
import { expect } from "vitest";

const initialState = useCartStore.getState();

beforeEach(() => {
    useCartStore.setState(initialState, true);
});

describe("useCartStore Unit Tests", () => {
    const mockupProduct = {
        id: 1,
        title: "Serum Przeciwzmarszczkowe z Retinolem",
        brand: "SkinLab",
        category: "beauty",
        price: 129.0,
        images: [
            "https://dummyjson.com/image/i/products/3/1.jpg",
            "https://dummyjson.com/image/i/products/3/2.jpg",
            "https://dummyjson.com/image/i/products/3/3.jpg",
        ],
        stock: 0,
        description:
            "Intensywne serum z retinolem 1%. Poprawia jędrność skóry i redukuje widoczność drobnych zmarszczek.",
        availabilityStatus: "Out of Stock",
        reviews: [],
    };
    test("Should add product", () => {
        useCartStore.getState().addProduct(mockupProduct, 1);

        const currentList = useCartStore.getState().productsList;
        expect(currentList).toHaveLength(1);
        expect(currentList[0]).toEqual({
            product: mockupProduct,
            quantity: 1,
        });
    });

    test("Should remove product", () => {
        useCartStore.getState().addProduct(mockupProduct, 1);

        expect(useCartStore.getState().productsList).toHaveLength(1);

        useCartStore.getState().removeProduct(mockupProduct.id);

        const currentList = useCartStore.getState().productsList;

        expect(currentList).toHaveLength(0);
    });
});
