export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedOptions: {
    size: string;
    color: string;
  };
};

export type CartItemsType = CartItemType[];

export type CartStoreStateTypes = {
  cart: CartItemsType;
};
export type CartStoreActionTypes = {
  addItem: (product: CartItemType) => void;
  removeItem: (product: CartItemType) => void;
  clearCart: () => void;
};
