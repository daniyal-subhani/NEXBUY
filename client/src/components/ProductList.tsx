// This component will render a list of products
"use client";
import { ProductCard, ProductCategories } from "@/components";
import { allProducts } from "@/data/products";
import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);
  return (
    <div className="">
      <ProductCategories />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))) : (
            <p className="col-span-full text-center text-gray-500">
            No products found in this category.
          </p>
          )}
      </div>
    </div>
  );
};

export default ProductList;
