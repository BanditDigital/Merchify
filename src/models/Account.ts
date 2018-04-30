import {Brand} from "./Brand";
import {Location} from "./Location";
import {Product} from "./Product";

export interface Account {
  _id?: string,
  name: string,
  locations?: Location[],
  brands?: Brand[],
  suppliedProducts?: Product[],
  tenant?: string
}
