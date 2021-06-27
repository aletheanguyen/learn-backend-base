import { baseSchema } from "./BaseModel";
import * as yup from 'yup';
import faker from "faker";

export let productSchema = baseSchema.shape({
    name: yup.string().required().default(faker.commerce.productName()),
    price: yup.number().min(0).default(Number(faker.commerce.price())),
    currency: yup.string().default(faker.finance.currencyCode())
});


export type Product = yup.InferType<typeof productSchema>

