import {Product} from "./Product";

export interface Brand {
  _id?: string,
  name: string,
  logo?: string,
  products?: Product[],
  tenant?: string
}
