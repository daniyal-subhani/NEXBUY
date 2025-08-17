// "use client"
import {
  CartItemType,
  CartStoreActionTypes,
  CartStoreStateTypes,
} from "@/types";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useCartStore = create<
  CartStoreStateTypes & CartStoreActionTypes
>()(
  devtools(
  persist<CartStoreStateTypes & CartStoreActionTypes>(
    (set) => ({
      cart: [],
      addItem: (product: CartItemType) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeItem: (product: CartItemType) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cartStorage", // name of the item in the storage (must be unique)
      // storage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  ),
   { name: "CartStore" } // devtools label
)
);
