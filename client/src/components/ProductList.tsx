// This component will render a list of products

import { ProductCard, ProductCategories } from "@/components";
import { allProducts } from "@/data/products";

const ProductList = () => {
  return (
    <div className="">
      <ProductCategories />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
