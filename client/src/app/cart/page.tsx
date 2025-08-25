"use client";

import { CartProducts } from "@/components";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { useCartStore } from "@/stores/cartStore";
import { useRouter, useSearchParams } from "next/navigation";

const  CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  const { cart } = useCartStore();
  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const steps = [
    {
      id: 1,
      title: "Shopping Cart",
    },
    {
      id: 2,
      title: "Shipping address",
    },
    {
      id: 3,
      title: "Payment method",
    },
  ];
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Your Shopping Cart
      </h2>

      <div className="flex  w-full max-w-md mx-auto space-x-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex  space-x-2 border-b-2  py-4 ${
              activeStep === step.id ? "border-gray-500" : "border-gray-200"
            }`}
          >
            <div
              className={`w-6 h-6 flex  justify-center rounded-full ${
                activeStep === step.id ? "bg-gray-500" : "bg-gray-200"
              } text-white`}
            >
              {step.id}
            </div>
            <p
              className={`${
                activeStep === step.id ? "text-gray-500" : "text-gray-200"
              } font-medium w-max`}
            >
              {step.title}
            </p>{" "}
            {/*`${activeStep === index + 1  ? "text-gray-500": "text-gray-200"} font-medium w-max` this also work */}
          </div>
        ))}
      </div>

      {/* You can add other components below */}
      <div className="flex flex-col md:flex-row  gap-8 container mx-auto p-6">
        <div className="lg:w-7/12 border rounded-md">
          {activeStep === 1 ? (
            <CartProducts />
          ) : activeStep === 2 ? (
            <ShippingForm />
          ) : activeStep === 3 ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              Please fill the shipping form to continue.
            </p>
          )}
        </div>
        {/* Payment Details */}
        <div className="w-full md:w-96 border rounded-md p-6 h-max bg-white">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Details</h2>

          <div className="space-y-3 text-gray-700 leading-0.5">
            <p className="flex justify-between">
              <span className="font-medium">Subtotal:</span>{" "}
              <span className="text-sm">${subTotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Tax (2%):</span>{" "}
              <span className="text-sm">${(subTotal * 0.02).toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Discount (3%):</span>{" "}
              <span className="text-sm">-${(subTotal * 0.03).toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Shipping Fee:</span>{" "}
              <span className="text-sm">$5.00</span>
            </p>
          </div>

          <div className="h-px bg-gray-300 my-4"></div>

          <p className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total:</span>
            <span>
              ${(subTotal + subTotal * 0.02 - subTotal * 0.03 + 5).toFixed(2)}
            </span>
          </p>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="mt-6 w-full bg-black text-white py-2 rounded-md cursor-pointer"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
