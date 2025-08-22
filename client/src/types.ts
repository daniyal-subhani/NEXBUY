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
  hasHydrated: boolean;
};
export type CartStoreActionTypes = {
  addItem: (product: CartItemType) => void;
  removeItem: (productId: string | number, productColor: string, productSize: string) => void;
  clearCart: () => void;
};
