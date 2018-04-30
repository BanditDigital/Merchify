import {Product} from "./Product";

export interface Brand {
  _id?: string,
  name: string,
  products?: Product[],
  tenant?: string
}
