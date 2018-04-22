import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Brand} from "../../../models/Brand";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BrandsService {
  constructor(private http: HttpClient) {}

  public getBrands() : Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.API}merchandise/brand`);
  }

  public addBrand(brand: Brand) : Observable<Brand> {
    return this.http.post<Brand>(`${environment.API}merchandise/brand`, brand, {});
  }

  public deleteBrand(brand: Brand) : Observable<Brand> {
    return this.http.delete<Brand>(`${environment.API}merchandise/brand/${brand._id}`)
  }

  public editBrand(brand: Brand) : Observable<Brand> {
    return this.http.patch<Brand>(`${environment.API}merchandise/brand`, brand, {});
  }

}
