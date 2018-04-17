import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {User} from "../../models/User";

import * as jsonwebtoken from 'jsonwebtoken';
import {StorageService} from "../../shared/storage/storage.service";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private storageService: StorageService) {}

  public register(user: User) : Observable<User[]> {
    console.log(console.log(JSON.stringify(user)));
    return this.http.post<User[]>(`${environment.API}users`, user);
  }

  public signIn(accountDetails) {
    return this.http.post(`${environment.API}users/login`, accountDetails);
  }

  public signOut() {
    return this.storageService.removeToken();
  }

  public forgot(emailAddress) {
    // return this.http.post(`${environment.API}users/forgot`, emailAddress);
  }

  public isAuthenticated() {
    return this.storageService.getToken().then(token => {
      let jwt = jsonwebtoken.decode(token);
      return (new Date().getTime()/1000 < jwt.exp);
    }).catch(err => false);
  }

}
