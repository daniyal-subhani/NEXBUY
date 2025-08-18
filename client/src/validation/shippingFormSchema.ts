import {z} from 'zod';

export const shippingFormSchema = z.object({
    name: z.string().min(3, "Name is required!"),
    email: z.email().min(3, "Email is required!"),
    phone: z.number().min(7, "Phone Number is required!"),
    address: z.string().min(3, "Address is required!"),
    city: z.string().min(1, "City is required!")

})

export type shippingFormInputSchema = z.infer<typeof shippingFormSchema> // This use the schema created by zod and convert it in typescript interfarence, so we don't need to create interfarance manually.