import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class StorageService {
  constructor(private storage: Storage) {}

  public setToken(token: string) {
    return this.storage.set('token', token);
  }

  public getToken() : Observable<any> {
    return Observable.fromPromise(this.storage.get('token'));
  }

  public getTokenPromise() {
    return this.storage.get('token');
  }

  public removeToken() {
    return this.storage.remove('token');
  }

}
