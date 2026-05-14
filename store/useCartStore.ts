import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types";

type ProductsStore = {
    productsList: CartItem[];
    addProduct: (product: Product, quantity: number) => void;
    removeProduct: (id: number) => void;
    updateQuantity: (id: number, action: "increase" | "decrease") => void;
    appliedCode: string | null;
    discount: number;
    applyDiscount: (discount: number, codeName: string) => void;
    promotedCoupon: string;
    getTotals: () => { subtotal: string; finalTotal: string };
    clearCart: () => void;
};

type CartItem = {
    product: Product;
    quantity: number;
};

const initialState = {
    productsList: [],
    appliedCode: null,
    discount: 0,
};

export const useCartStore = create<ProductsStore>()(
    persist(
        (set, get) => ({
            ...initialState,
            addProduct: (product: Product, quantity: number) => {
                set((state) => {
                    const inCart = state.productsList.find(
                        (item) => item.product.id === product.id,
                    );

                    if (inCart) {
                        const updatedList = state.productsList.map(
                            (element) => {
                                if (element.product.id === product.id) {
                                    return {
                                        ...element,
                                        quantity: element.quantity + quantity,
                                    };
                                } else {
                                    return element;
                                }
                            },
                        );
                        return {
                            productsList: updatedList,
                        };
                    } else {
                        return {
                            productsList: [
                                ...state.productsList,
                                { product, quantity },
                            ],
                        };
                    }
                });
            },
            removeProduct: (id: number) => {
                set((state) => {
                    return {
                        productsList: state.productsList.filter(
                            (item) => item.product.id !== id,
                        ),
                    };
                });
            },
            updateQuantity: (id: number, action: "increase" | "decrease") => {
                set((state) => {
                    const updatedList = state.productsList.map((element) => {
                        if (element.product.id === id) {
                            if (
                                action === "decrease" &&
                                element.quantity === 1
                            ) {
                                return element;
                            }
                            return {
                                ...element,
                                quantity:
                                    action === "increase"
                                        ? element.quantity + 1
                                        : element.quantity - 1,
                            };
                        } else {
                            return element;
                        }
                    });
                    return {
                        productsList: updatedList,
                    };
                });
            },
            applyDiscount: (discount: number, codeName: string) => {
                set((state) => {
                    return {
                        discount,
                        appliedCode: codeName,
                    };
                });
            },
            promotedCoupon: "2026",
            getTotals: () => {
                const { productsList, discount } = get();

                const subtotal = productsList.reduce((acc, item) => {
                    return acc + item.product.price * item.quantity;
                }, 0);

                const finalTotal = Math.max(0, subtotal - discount);

                return {
                    subtotal: subtotal.toFixed(2),
                    finalTotal: finalTotal.toFixed(2),
                };
            },
            clearCart: () => {
                set(initialState);
            },
        }),
        { name: "own-shop-cart" },
    ),
);
