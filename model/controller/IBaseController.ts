import { BaseModel } from "../BaseModel";
import { FindProps, Paging} from "../Query";

export interface IBaseController<T extends BaseModel> {
    find(params?: FindProps<T>): Promise<Paging<T>>
    save(item: T): Promise<T>
    delete(id: string): Promise<T>
    getById(id: string): Promise<T>
}

