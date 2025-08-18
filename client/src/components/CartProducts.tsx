import { useCartStore } from "@/stores/cartStore";
import { Trash } from "lucide-react";
import Image from "next/image";

const CartProducts = () => {
  const { cart, removeItem } = useCartStore();

  return (
    <div>
      {/* Cart Items */}
      <div className="flex-1 space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 p-4 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {/* Product Image */}
            <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={item.images[item.selectedOptions.color]}
                alt={item.name}
                width={112}
                height={112}
                className="object-contain h-full"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-sm text-gray-600">
                Size: {item.selectedOptions.size.toUpperCase()}
              </p>
              <p className="text-sm text-gray-600">
                Color: {item.selectedOptions.color}
              </p>
              <p className="font-bold text-blue-700">
                ${item.price.toFixed(2)}
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() =>
                removeItem(
                  item.id,
                  item.selectedOptions.color,
                  item.selectedOptions.size
                )
              }
              className="p-2 rounded-full hover:bg-red-50 transition"
            >
              <Trash className="h-5 w-5 text-red-600" />
            </button>
          </div>
        ))}

        {/* Empty Cart Message */}
        {cart.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProducts;
