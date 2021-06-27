import { BaseModel } from "./BaseModel";

export interface QueryAndSearch<T extends BaseModel> {
    searchText?: { fields: (keyof T)[], text: string }[],
    sort?: (keyof T)[],
    filterNumber?: { fields: keyof T[], value: number, method: "gt" | "lt" | "eq" }
}

export interface FindProps<T extends BaseModel> extends QueryAndSearch<T> {
    page?: number,
    pageSize?: number
}

export interface Paging<T extends BaseModel> {
    page?: number,
    pageSize?: number,
    total?: number,
    totalPage?: number,
    rows?: T[]
}

