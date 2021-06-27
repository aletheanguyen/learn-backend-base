import { baseSchema } from "./BaseModel";
import * as yup from 'yup';

export let productSchema = baseSchema.shape({
    name: yup.string().required().default("Product A"),
    price: yup.number().min(0).default(2000),
    currency: yup.string().default("$")
});


export type Product = yup.InferType<typeof productSchema>

