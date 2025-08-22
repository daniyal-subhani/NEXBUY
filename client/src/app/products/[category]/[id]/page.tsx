"use client";
import { allProducts } from "@/data/products";
import { useCartStore } from "@/stores/cartStore";
import Image from "next/image";
import { useState } from "react";




export default function SingleProductPage({ params, }:{
  params: { category: string; id: string };
}) {
  const {addItem} = useCartStore()
  const { id } = params;
  
  const product = allProducts.find((p) => p.id.toString() === id.toString());

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  //  Grab all the images from products
  const allImages = Object.values(product.images);
  const [mainImage, setMainImage] = useState(allImages[0]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* Left: Image */}
      <div>
        <div className="flex flex-col items-center">
          <Image
            src={mainImage} // ✅ first image
            alt={product.name}
            width={400}
            height={400}
            className="rounded-2xl border border-gray-200"
          />
        </div>
        {/*  Secondary Images */}
        <div className="flex gap-3 justify-center">
          {allImages.map((image) => (
            <button
              className={`border rounded-lg p-1 ${
                mainImage === image ? "border-black" : "border-gray-300"
              }`}
              key={product.id}
              onClick={() => setMainImage(image)}
            >
              <Image src={image} alt={product.name} width={70} height={70} />
            </button>
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.shortDescription}</p>
        <p className="text-lg text-gray-900 font-semibold">
          ${product.price.toFixed(2)}
        </p>

        {/* Sizes */}
        <div>
          <h2 className="font-medium mb-2">Sizes</h2>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded-lg hover:bg-gray-200"
              >
                {size.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <h2 className="font-medium mb-2">Colors</h2>
          <div className="flex gap-3">
            {Object.keys(product.images).map((color) => (
              <button
             
                key={color}
                className="w-8 h-8 rounded-full border-2"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="font-medium mb-2">Description</h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        {/* Add to Cart */}
        <button  className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
