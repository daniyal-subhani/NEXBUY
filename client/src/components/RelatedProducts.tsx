"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types";
import { allProducts } from "@/data/products";

export default function RelatedProducts({
  product,
  category,
}: {
  product: ProductType;
  category: string;
}) {
  const relatedProducts = allProducts.filter(
    (p) => p.category === category && p.id !== product.id
  );

  if (relatedProducts.length === 0) return null; // no related products

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold tracking-tight mb-6">
        Related Products
      </h2>

      {relatedProducts.length === 1 ? (
        // ✅ Single product (centered)
        <div className="flex justify-center">
          <div className="max-w-xs w-full">
            <ProductCard product={relatedProducts[0]} />
          </div>
        </div>
      ) : (
        // ✅ Multiple products (grid)
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
