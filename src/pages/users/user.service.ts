import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../../models/User";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.API}users/org`);
  }
}
