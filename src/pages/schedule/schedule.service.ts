import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Visit} from "../../models/Visit";
import {Retailer} from "../../models/Retailer";

@Injectable()
export class ScheduleService {
  constructor(private http: HttpClient) {}

  public addVisit(visit: Visit) : Observable<Visit> {
    return this.http.post<Visit>(`${environment.API}visit`, visit, {});
  }

  public getVisits() : Observable<Visit[]> {
    return this.http.get<Visit[]>(`${environment.API}visit`);
  }

  public editVisit(visit: Visit) : Observable<Visit> {
    return this.http.patch<Visit>(`${environment.API}visit`, visit);
  }

  public deleteVisit(visit: Visit) : Observable<Visit> {
    return this.http.delete<Visit>(`${environment.API}visit/${visit.id}`)
  }
}
