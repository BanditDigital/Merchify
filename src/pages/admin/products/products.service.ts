import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Product} from "../../../models/Product";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API}product`);
  }

  public addProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>(`${environment.API}product`, product, {});
  }

  public deleteProduct(product: Product) : Observable<Product> {
    return this.http.delete<Product>(`${environment.API}product/${product.id}`)
  }

  public updateProduct(product: Product) : Observable<Product> {
    return this.http.patch<Product>(`${environment.API}product`, product, {});
  }

}
