import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {Location} from "../../models/Location";

@Injectable()
export class LocationsService {
  constructor(private http: HttpClient) {}

  public getLocations() : Observable<Location[]> {
    return this.http.get<Location[]>(`${environment.API}Location`);
  }

  public addLocation(location: Location) : Observable<Location> {
    return this.http.post<Location>(`${environment.API}location`, location, {});
  }

  public deleteLocation(location: Location) : Observable<Location> {
    return this.http.delete<Location>(`${environment.API}location/${location.id}`)
  }

  public editLocation(location: Location) : Observable<Location> {
    return this.http.patch<Location>(`${environment.API}location`, location, {});
  }

}
