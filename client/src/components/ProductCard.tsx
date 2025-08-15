import { ProductType } from "@/types";
import Image from "next/image";


const ProductCard = ({product} : {product: ProductType}) => {
  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col">
      {/* Product Image */}
      {product.images?.[0] && (
        <Image
          src={product.images[0]}
          alt={product.name}
          className="h-48 w-full object-cover rounded mb-3"
          width={200}
          height={200}
        />
      )}

      {/* Product Name */}
      <h2 className="text-lg font-semibold">{product.name}</h2>

      {/* Product Description */}
      <p className="text-gray-600 line-clamp-2">{product.description}</p>

      {/* Price */}
      <span className="text-xl font-bold mt-2">${product.price}</span>

      {/* Action */}
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 transition text-white py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
