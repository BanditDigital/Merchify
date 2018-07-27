import {Brand} from "./Brand";

export interface Product {
  id?: number,
  sku: string,
  size: string,
  description: string,
  promoCode?: string,
  retailPrice?: number,
  brand?: Brand,
  tenantId?: number,
  tenant?: string;
}
