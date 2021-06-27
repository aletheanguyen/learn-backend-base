import * as yup from 'yup';
import { BaseModel } from './BaseModel';

export interface Product extends BaseModel {
    name: string,
    price?: number,
}

export let productSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().min(0),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    _id: yup.string()
});
