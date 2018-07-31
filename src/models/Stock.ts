import {Product} from "./Product";
import {Visit} from "./Visit";

export interface Stock {
  id?: number,
  productId?: number,
  product?: Product,
  onHand?: number,
  qtySold?: number,
  visit?: Visit,
  visitId?: number,
  price?: number
}
