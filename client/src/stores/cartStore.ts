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
        hasHydrated: false,
        addItem: (product: CartItemType) =>
          set((state) => {
            const existingItem = state.cart.find(
              (item) =>
                item.id === product.id &&
                item.selectedOptions?.color ===
                  product.selectedOptions?.color &&
                item.selectedOptions?.size === product.selectedOptions?.size
            );
            if (existingItem) {
              return {
                cart: state.cart.map((item) =>
                  item.id === product.id &&
                  item.selectedOptions?.color ===
                    product.selectedOptions?.color &&
                  item.selectedOptions?.size === product.selectedOptions?.size
                    ? { ...item, quantity: item.quantity + product.quantity }
                    : item
                ),
              };
            } else {
              return {
                cart: [...state.cart, product],
              };
            }
          }),
        removeItem: (
          productId: string | number,
          productColor: string,
          productSize: string
        ) =>
          set((state) => ({
            cart: state.cart
              .map((item) =>
                item.id === productId &&
                item.selectedOptions?.color === productColor &&
                item.selectedOptions?.size === productSize
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
              .filter((item) => item.quantity > 0),
          })),
        clearCart: () => set({ cart: [] }),
      }),
      {
        name: "cartStorage", // name of the item in the storage (must be unique)
        // storage: () => sessionStorage, // (optional) by default the 'localStorage' is used
        onRehydrateStorage: () => (state) => {
          if (state) {
            state.hasHydrated = true;
          }
        },
      }
    ),
    { name: "CartStore" } // devtools label
  )
);
