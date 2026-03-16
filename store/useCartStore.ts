import { create } from 'zustand';
import type { Product } from '@/types';

type ProductsStore = {
    productsList: CartItem[];
    addProduct: (product: Product, quantity: number) => void;
    removeProduct: (id: number) => void;
    updateQuantity: (id: number, action: 'increase' | 'decrease') => void;
};

type CartItem = {
    product: Product;
    quantity: number;
}

export const useCartStore = create<ProductsStore>((set) => ({
    productsList: [],
    addProduct: (product: Product, quantity: number) => {
        set((state) => {
            const inCart = state.productsList.find(item => item.product.id === product.id)

            if (inCart) {
                const updatedList = state.productsList.map(element => {
                    if (element.product.id === product.id) {
                        return {
                            ...element,
                            quantity: element.quantity + quantity,
                        }
                    } else {
                        return element;
                    }
                })
                return {
                    productsList: updatedList
                }
            } else {
                return {
                    productsList: [
                        ...state.productsList,
                        { product, quantity }
                    ]
                }
            }
        })
    },
    removeProduct: (id: number) => {
        set((state) => {
            return {
                productsList: state.productsList.filter(item => item.product.id !== id)
            }
        })
    },
    updateQuantity: (id: number, action: 'increase' | 'decrease') => {
        set(state => {
            const updatedList = state.productsList.map(element => {
                if (element.product.id === id) {
                    if (action === 'decrease' && element.quantity === 1) {
                        return element;
                    }
                    return {
                        ...element,
                        quantity: action === 'increase' ? element.quantity + 1 : element.quantity - 1
                    }
                } else {
                    return element;
                }
            })
            return {
                productsList: updatedList
            }
        })
    }
}));