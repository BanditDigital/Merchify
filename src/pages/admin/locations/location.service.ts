import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Account} from "../../../models/Account";
import {Location} from "../../../models/Location";

@Injectable()
export class LocationService {
  constructor(private http: HttpClient) {}

  public addLocation(account: Account, location: Location) : Observable<Location[]> {
    return this.http.post<Location[]>(`${environment.API}accounts/${account._id}/location`, location, {});
  }

  public deleteLocation(account: Account, location: Location) : Observable<Location[]> {
    return this.http.delete<Location[]>(`${environment.API}accounts/${account._id}/location/${location._id}`)
  }

  public updateLocation(account: Account, location: Location) : Observable<Location[]> {
    return this.http.patch<Location[]>(`${environment.API}accounts/${account._id}/location`, location, {});
  }
}
