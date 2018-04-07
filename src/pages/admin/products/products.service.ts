import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Product} from "../../../models/Product";
import {Brand} from "../../../models/Brand";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(brand: Brand) : Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API}brands/${brand.id}/products`);
  }

  public addProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>(`${environment.API}brands`, product, {});
  }

  public deleteProducts(product: Product) : Observable<Product> {
    return this.http.delete<Product>(`${environment.API}brands/${product.id}`)
  }

  public editProducts(product: Product) : Observable<Product> {
    return this.http.patch<Product>(`${environment.API}brands/${product.id}`, product, {});
  }

}
