import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { textSpanContainsTextSpan, textSpanIsEmpty } from 'typescript';

export enum Status {
    "actived" = "actived",
    "deleted" = "deleted",
    "inactived" = "inactived"
}

export let baseSchema = yup.object({
    _id: yup.string().default(uuidv4()),
    status: yup.mixed<Status>().default(Status.actived),
    createdAt: yup.date().default(new Date()),
    updatedAt: yup.date().default(new Date()),
});

export type BaseModel = yup.InferType<typeof baseSchema>

