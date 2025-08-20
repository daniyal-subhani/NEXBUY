"use client";

import {
  paymentFormInputSchema,
  paymentFormSchema,
} from "@/validation/shippingFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PaymentForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<paymentFormInputSchema>({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit = (data: paymentFormInputSchema) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Card Holder */}
      <div>
        <label
          htmlFor="cardHolder"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Card Holder
        </label>
        <input
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          {...register("cardHolder")}
          className="w-full px-4 py-2 border-b focus:ring-0 focus:outline-none"
        />
        {errors.cardHolder && (
          <p className="text-sm text-red-500 mt-1">
            {errors.cardHolder.message}
          </p>
        )}
      </div>

      {/* Card Number */}
      <div>
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="4949 5696 9086 1234"
          {...register("cardNumber")}
          className="w-full px-4 py-2 border-b focus:ring-0 focus:outline-none"
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-500 mt-1">
            {errors.cardNumber.message}
          </p>
        )}
      </div>

      {/* Expiration Date */}
      <div>
        <label
          htmlFor="expirationDate"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Expiration Date
        </label>
        <input
          type="text"
          id="expirationDate"
          placeholder="09/27"
          {...register("expirationDate")}
          className="w-full px-4 py-2 border-b focus:ring-0 focus:outline-none"
        />
        {errors.expirationDate && (
          <p className="text-sm text-red-500 mt-1">
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      {/* CVV */}
      <div>
        <label
          htmlFor="cvv"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
          className="w-full px-4 py-2 border-b focus:ring-0 focus:outline-none"
        />
        {errors.cvv && (
          <p className="text-sm text-red-500 mt-1">{errors.cvv.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-black text-white my-4 cursor-pointer font-medium py-2 rounded-lg hover:bg-gray-900 transition duration-200"
      >
        Pay Now
      </button>
    </form>
  </div>

  );
}
