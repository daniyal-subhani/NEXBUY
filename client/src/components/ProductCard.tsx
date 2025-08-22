"use client";
import { CartItemType, ProductType } from "@/types";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductCard = ({ product }: { product: ProductType }) => {

 
  
  const { addItem, cart } = useCartStore();
  // ✅ Default color is the first color in product.colors
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-lg transition duration-300 flex flex-col bg-white overflow-hidden">
      {/* Product Image */}
      <div className="relative w-full aspect-[4/5] bg-gray-50">
      <Link href={`/products/${product.category}/${product.id}`}>
        <Image
          src={product.images[selectedColor]} // ✅ show image for selected color
          alt={product.name}
          fill
          className="object-cover transition-all hover:scale-105 duration-300 cursor-pointer"
          sizes="(max-width: 768px) 100vw, 300px"
          />
          </Link>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <h2 className="text-lg font-semibold line-clamp-1">{product.name}</h2>

        {/* Short Description */}
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex justify-between items-center">
          {/* Price */}
          <span className="text-xl font-bold text-gray-900 mt-2">
            ${product.price.toFixed(2)}
          </span>

          {/* Size Selector */}
          <div className="mt-3">
            <Select
              value={selectedSize}
              onValueChange={(value) => setSelectedSize(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Size</SelectLabel>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          {/* Colors */}
          <div className="flex items-center gap-2 mt-3">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border-2 transition ${
                  selectedColor === color
                    ? "border-gray-800 scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>

          {/* Action */}
          <button
            onClick={() =>
              addItem({
                ...product,
                quantity: 1,
                selectedOptions: {
                  size: selectedSize,
                  color: selectedColor,
                },
              })
            }
            className="  bg-black  text-white py-1 px-2 rounded-md text-sm cursor-pointer "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
