import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Product} from "../../../models/Product";
import {Brand} from "../../../models/Brand";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public addProduct(brand: Brand, product: Product) : Observable<Product[]> {
    return this.http.post<Product[]>(`${environment.API}merchandise/brand/${brand._id}/product`, product, {});
  }

  public deleteProduct(brand: Brand, product: Product) : Observable<Product[]> {
    return this.http.delete<Product[]>(`${environment.API}merchandise/brand/${brand._id}/product/${product._id}`)
  }

  public updateProduct(brand: Brand, product: Product) : Observable<Product[]> {
    return this.http.patch<Product[]>(`${environment.API}merchandise/brand/${brand._id}/product`, product, {});
  }

}
