import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../../../models/User";
import {environment} from "../../../environments/environment";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API}users/org`);
  }

  public getOrganisation() {
    return this.http.get(`${environment.API}users/tenant`);
  }

  public resendWelcomeEmail(user: User) {
    return this.http.get(`${environment.API}users/verify/resend/${user.email}`);
  }

  public updateUser(user: User) : Observable<User> {
    return this.http.patch<User>(`${environment.API}users/org/${user.email}`, user);
  }

  public deleteUser(user: User) {
    return this.http.delete(`${environment.API}users/org/${user.email}`);
  }
}
