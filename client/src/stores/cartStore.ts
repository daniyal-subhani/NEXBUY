import {
  CartItemType,
  CartStoreActionTypes,
  CartStoreStateTypes,
} from "@/types";
import { create } from "zustand";

export const useCartStore = create<CartStoreStateTypes & CartStoreActionTypes>(
  (set) => ({
    cart: [],
    addItem: (product: CartItemType) =>
      set((state) => ({ cart: [...state.cart, product] })),
    removeItem: (product: CartItemType) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== product.id),
      })),
    clearCart: () => set({ cart: [] }),
  })
);
