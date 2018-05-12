import {Retailer} from "./Retailer";
import {Tenant} from "./Tenant";

export interface Location {
  id?: any,
  name: string,
  type: string,
  retailers?: Retailer[],
  tenantId?: number,
  tenant?: Tenant
}
