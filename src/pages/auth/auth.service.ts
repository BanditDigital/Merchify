import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {User} from "../../models/User";
import * as jsonwebtoken from 'jsonwebtoken';
import {StorageService} from "../../shared/storage/storage.service";
import * as _ from 'lodash';

@Injectable()
export class AuthService {

  public user: User;

  constructor(private http: HttpClient, private storageService: StorageService) {}

  public register(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${environment.API}users`, user);
  }

  public signIn(accountDetails) {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.API}users/login`, accountDetails)
        .subscribe(result => {
          this.user = jsonwebtoken.decode(result);
          this.storageService.setToken(<string>result);
          resolve(true)
        }, error => {
          resolve(false);
        });
    });
  }

  public isAuthenticated() {
    return new Promise((resolve, reject) => {
      this.getToken().subscribe(result => {
        if (result) {
          let jwt = jsonwebtoken.decode(result);
          this.user = jsonwebtoken.decode(result);
          resolve(new Date().getTime() / 1000 < jwt.exp);
        } else {
          resolve(false);
        }
      }, error => {
        resolve(false);
      });

    });
  }

  public isLoggedIn() {
    return this.user != null;
  }

  public isAdmin() {
    return _.includes(this.user.roles, 'Admin');
  }

  public signOut() {
    this.storageService.removeToken();
    this.user = null;
  }

  public getToken() : Observable<any> {
    return this.storageService.getToken();
  }


}
