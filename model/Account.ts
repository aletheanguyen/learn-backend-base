import { baseSchema } from "./BaseModel";
import * as yup from 'yup';
import faker from "faker";

export let accountSchema = baseSchema.shape({
    username: yup.string().required().default(faker.name.findName()),
    password: yup.string().required().default('ILOVEALE')
});

export type Account = yup.InferType<typeof accountSchema>
