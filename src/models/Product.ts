import {Brand} from "./Brand";

export interface Product {
  id?: number,
  sku: string,
  size: string,
  description: string,
  promoCode?: string,
  barcode?: string,
  brand?: Brand,
  tenantId?: number,
  tenant?: string;
}
