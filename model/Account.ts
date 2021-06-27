import { baseSchema } from "./BaseModel";
import * as yup from 'yup';

export let accountSchema = baseSchema.shape({
    username: yup.string().required().default('Ale Nguyen'),
    password: yup.string().required().default('ILoveAle')
});


export type Account = yup.InferType<typeof accountSchema>
