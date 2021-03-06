import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {Retailer} from "../../models/Retailer";

@Injectable()
export class RetailerService {
  constructor(private http: HttpClient) {}

  public getRetailers() : Observable<Retailer[]> {
    return this.http.get<Retailer[]>(`${environment.API}retailer`);
  }

  public getRetailerById(id: number) : Observable<Retailer> {
    return this.http.get<Retailer>(`${environment.API}retailer/${id}`);
  }

  public addRetailer(retailer: Retailer) : Observable<Retailer> {
    return this.http.post<Retailer>(`${environment.API}retailer`, retailer, {});
  }

  public deleteRetailer(retailer: Retailer) : Observable<Retailer> {
    return this.http.delete<Retailer>(`${environment.API}retailer/${retailer.id}`)
  }

  public editRetailer(retailer: Retailer) : Observable<Retailer> {
    return this.http.patch<Retailer>(`${environment.API}retailer`, retailer, {});
  }

}
