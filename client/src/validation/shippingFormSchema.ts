import {z} from 'zod';

export const shippingFormSchema = z.object({
    name: z.string().min(3, "Name is required!"),
    email: z.email().min(3, "Email is required!"),
    phone: z.number().min(7, "Phone Number is required!"),
    address: z.string().min(3, "Address is required!"),
    city: z.string().min(1, "City is required!")

})