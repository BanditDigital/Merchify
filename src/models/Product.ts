export interface Product {
  _id?: string,
  sku: string,
  size: string,
  description: string,
  promoCode: string,
  barcode: string,
  brand: string,
  tenant?: string;
}
