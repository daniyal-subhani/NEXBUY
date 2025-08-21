import { allProducts } from "@/data/products"
import Image from "next/image";

export default function SingleProductPage({params}: {params: {id: string | number}}) {
    const product = allProducts.find(p => p.id.toString() === params.id)
    if (!product) {
        return <p className="text-center text-gray-500">Product not found.</p>;
      }
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* Left: Image */}
      <div className="flex flex-col items-center">
        <Image
          src={product.images.gray}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-2xl border border-gray-200"
        />
      </div>

      {/* Right: Product Info */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.shortDescription}</p>
        <p className="text-lg text-gray-900 font-semibold">${product.price}</p>

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
            {product.colors.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-2 ${
                  color === "gray" ? "bg-gray-500" : "bg-green-500"
                }`}
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
        <button className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
