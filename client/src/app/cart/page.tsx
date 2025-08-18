"use client";

import { CartProducts } from "@/components";
import { useCartStore } from "@/stores/cartStore";

const page = () => {
    const { cart } = useCartStore();
     const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const steps = ["Shopping Cart", "Shipping Address", "Payment Method"];
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Your Shopping Cart</h2>

      <div className="flex  w-full max-w-md mx-auto space-x-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex  space-x-2 border-b-2 border-gray-500 py-4"
          >
            <div className="w-6 h-6 flex  justify-center rounded-full bg-blue-600 text-white ">
              {index + 1}
            </div>
            <p className="text-gray-700 font-medium w-max">{step}</p>
          </div>
        ))}
      </div>

      {/* You can add other components below */}
       <div className="flex flex-col md:flex-row gap-8 container mx-auto p-6">
        <div className="">

        {/* Example component */}
        <CartProducts />
        </div>
        {/* Payment Details */}
      <div className="w-full md:w-80 border rounded-2xl shadow-md p-6 h-max bg-white">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Details</h2>

        <div className="space-y-3 text-gray-700">
          <p className="flex justify-between">
            <span>Subtotal:</span> <span>${subTotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%):</span> <span>${(subTotal * 0.02).toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Discount (3%):</span> <span>-${(subTotal * 0.03).toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee:</span> <span>$5.00</span>
          </p>
        </div>

        <div className="h-px bg-gray-300 my-4"></div>

        <p className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total:</span>
          <span>
            $
            {(
              subTotal +
              subTotal * 0.02 -
              subTotal * 0.03 +
              5
            ).toFixed(2)}
          </span>
        </p>

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
          Proceed to Checkout
        </button>
      </div>
      </div>
    </div>
  );
};

export default page;
