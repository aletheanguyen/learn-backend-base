import { BaseModel } from "./BaseModel";

export interface QueryAndSearch<T> {
    searchText?: { fields: (keyof T)[], text: string}[],
    sort?: (keyof T)[],
    filterNumber?: { fields: (keyof T)[], value: number, method: "gt" | "lt" | "eq" }
}

export interface Paging<T extends BaseModel> {
    page?: number,
    pageSize?: number,
    total?: number,
    totalPage?: number,
    rows?: T[]
}

