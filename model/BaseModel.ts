export interface BaseModel {
    _id?: string,
    status?: Status,
    createdAt: Date,
    updatedAt: Date
}

export enum Status {
    "active" = "active",
    "deleted" = "deleted",
    "inactive" = "inactive"
}