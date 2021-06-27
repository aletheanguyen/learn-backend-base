import { BaseModel } from "./BaseModel";
import * as yup from 'yup';

export interface Account extends BaseModel {
    userName: string,
    password: string
}

export let accountSchema = yup.object().shape({
    userName: yup.string().required().min(1),
    password: yup.string().required().min(1),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    _id: yup.string()
});

