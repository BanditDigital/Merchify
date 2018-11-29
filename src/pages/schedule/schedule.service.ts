import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Visit} from "../../models/Visit";

@Injectable()
export class ScheduleService {
  constructor(private http: HttpClient) {}

  public addVisit(visit: Visit) : Observable<Visit> {
    return this.http.post<Visit>(`${environment.API}visit`, visit, {});
  }

  public getVisits(skip, take) : Observable<any> {
    return this.http.post<any>(`${environment.API}visit/app/infinite`, {
      skip: skip,
      take: take,
      filters: {},
      sortOrder: 1,
      sortField: 'scheduleDate'
    });
  }

  public editVisit(visit: Visit) : Observable<Visit> {
    return this.http.patch<Visit>(`${environment.API}visit`, visit);
  }

  public deleteVisit(visit: Visit) : Observable<Visit> {
    return this.http.delete<Visit>(`${environment.API}visit/${visit.id}`);
  }

  public getVisitWithPhotos(visit: Visit) : Observable<Visit> {
   return this.http.get<Visit>(`${environment.API}visit/photos/` + visit.id);
  }
}
