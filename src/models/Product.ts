export class Product {
  constructor(public id: string,
              public sku: string,
              private size: string,
              public description: string,
              public promoCode: string,
              public barcode: string) {}
}
