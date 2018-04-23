import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {User} from "../../models/User";

import * as jsonwebtoken from 'jsonwebtoken';
import {StorageService} from "../../shared/storage/storage.service";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  public register(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${environment.API}users`, user);
  }

  public signIn(accountDetails) {
    return this.http.post(`${environment.API}users/login`, accountDetails);
  }

  public signOut() {
    this.storageService.removeToken();
  }

  public forgot(emailAddress) {
    // return this.http.post(`${environment.API}users/forgot`, emailAddress);
  }

  public getToken() : Observable<any> {
    return this.storageService.getToken();
  }

  public async isAuthenticated() {
    let auth: boolean = false;
    let token = await this.storageService.getTokenPromise();
    if (token) {
      let jwt = jsonwebtoken.decode(token);
      auth = (new Date().getTime() / 1000 < jwt.exp);
    }
    return auth;
  }
}
