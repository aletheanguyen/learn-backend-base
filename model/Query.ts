import { string } from "yup/lib/locale";
import { BaseModel } from "./BaseModel";

export interface QueryAndSearch<T> {
    searchText?: { fields: string[], text: string }[],
    sort?: string[],
    filterNumber?: { fields: string[], value: number, method: "gt" | "lt" | "eq" }
}

export interface Paging<T extends BaseModel> {
    page?: number,
    pageSize?: number,
    total?: number,
    totalPage?: number,
    rows?: T[]
}

