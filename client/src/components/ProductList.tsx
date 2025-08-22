// This component will render a list of products
"use client";
import { ProductCard, ProductCategories } from "@/components";
import { allProducts } from "@/data/products";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
        <AnimatePresence mode="wait">
          {" "}
          //
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Final/ending animation state
                exit={{ opacity: 0, y: -20 }} // Exit animation state
                transition={{ duration: 0.3 }} // Animation duration
              >
                <ProductCard key={product.id} product={product} />
              </motion.div>
            ))
          ) : (
            <motion.p
              className="col-span-full text-center text-gray-500"
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No products found in this category.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductList;
