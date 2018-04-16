import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {User} from "../../models/User";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(user: User) : Observable<User[]> {
    console.log(console.log(JSON.stringify(user)));
    return this.http.post<User[]>(`${environment.API}users`, user);
  }
}
