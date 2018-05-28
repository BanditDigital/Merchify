import {Brand} from "./Brand";
import {Location} from "./Location";
import {Product} from "./Product";
import {Tenant} from "./Tenant";

export interface Retailer {
  id?: number,
  name: string,
  type: string,
  locations?: Location[],
  brands?: Brand[],
  products?: Product[],
  tenantId?: number,
  tenant?: Tenant
}
