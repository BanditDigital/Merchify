import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {Brand} from "../../models/Brand";

@Injectable()
export class BrandsService {
  constructor(private http: HttpClient) {}

  public getBrands() {
    return this.http.get(`${environment.API}brand`);
  }

  public getBrand(id: number) : Observable<Brand> {
    return this.http.get<Brand>(`${environment.API}brand/${id}`);
  }

  public addBrand(brand: Brand) : Observable<Brand> {
    return this.http.post<Brand>(`${environment.API}brand`, brand, {});
  }

  public deleteBrand(brand: Brand) : Observable<Brand> {
    return this.http.delete<Brand>(`${environment.API}brand/${brand.id}`)
  }

  public editBrand(brand: Brand) : Observable<Brand> {
    return this.http.patch<Brand>(`${environment.API}brand`, brand, {});
  }

}
