import {
  shippingFormInputSchema,
  shippingFormSchema,
} from "@/validation/shippingFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { log } from "console";
import React from "react";
import { Resolver, useForm } from "react-hook-form";

export default function ShippingForm() {
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
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="John Doe" id="name" />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
        />
        <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" placeholder="123 456 789" />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="St#10E" />
        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder="New York" />
      </form>
    </div>
  );
}
