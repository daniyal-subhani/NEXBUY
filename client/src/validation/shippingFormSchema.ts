import { z } from "zod";

export const shippingFormSchema = z.object({
  name: z.string().min(3, "Name is required!"),
  email: z.email().min(3, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone Number is required!")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  address: z.string().min(3, "Address is required!"),
  city: z.string().min(1, "City is required!"),
});

export type shippingFormInputSchema = z.infer<typeof shippingFormSchema>; // This use the schema created by zod and convert it in typescript interfarence, so we don't need to create interfarance manually.

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z
    .string()
    .min(16, "Card number is required!")
    .max(16, "Card number is required!")
    .regex(/^\d{16}$/, "Card number must be 16 digits"),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration must be in MM/YY format"),
  cvv: z
    .string()
    .min(3, "CVV is required!")
    .max(4, "CVV is required!")
    .regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
});

export type paymentFormInputSchema = z.infer<typeof paymentFormSchema>;
