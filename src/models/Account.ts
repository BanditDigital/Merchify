import {Brand} from "./Brand";
import {Location} from "./Location";

export interface Account {
  _id?: string,
  name: string,
  locations?: Location[],
  brands?: Brand[],
  tenant: string
}
