import {
  shippingFormInputSchema,
  shippingFormSchema,
} from "@/validation/shippingFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import {useForm } from "react-hook-form";

export default function ShippingForm() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<shippingFormInputSchema>({
    resolver: zodResolver(shippingFormSchema),
  });

  const onSubmit = (data: shippingFormInputSchema) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name")}
            className="w-full px-4 py-2 border-b focus:ring-0 focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            {...register("email")}
            className="w-full px-4 py-2 border-b focus:ring-0 focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="123 456 789"
            {...register("phone")}
            className="w-full px-4 py-2 border-b focus:ring-0 focus:outline-none"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="St#10E"
            {...register("address")}
            className="w-full px-4 py-2 border-b focus:ring-0 focus:outline-none"
          />
          {errors.address && (
            <p className="text-sm text-red-500 mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="New York"
            {...register("city")}
            className="w-full px-4 py-2 border-b focus:ring-0 focus:outline-none"
          />
          {errors.city && (
            <p className="text-sm text-red-500 mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={() => router.push("/cart?step=3", { scroll: false })}
          type="submit"
          className="w-full bg-black text-white my-4 cursor-pointer font-medium py-2 rounded-lg hover:bg-gray-900 transition duration-200"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
