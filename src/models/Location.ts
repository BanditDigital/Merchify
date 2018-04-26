import {Product} from "./Product";

export interface Location {
  _id?: any,
  name: string,
  storeType: string,
  products?: Product[];
}
