import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Product} from "../../models/Product";
import {environment} from "../../environments/environment";
import {Brand} from "../../models/Brand";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API}product`);
  }

  public getProductsByBrand(brand: Brand) : Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API}product/${brand.id}`);
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
