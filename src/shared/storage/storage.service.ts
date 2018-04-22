import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {
  constructor() {}

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public removeToken() {
    return localStorage.clear();
  }
}
