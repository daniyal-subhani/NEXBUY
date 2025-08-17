"use client";

import { CartProducts } from "@/components";

const page = () => {
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
      <div className="mt-8">
        {/* Example component */}
        <CartProducts />
      </div>
    </div>
  );
};

export default page;
