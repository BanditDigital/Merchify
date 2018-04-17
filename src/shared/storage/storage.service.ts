import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {
  constructor(private storage: Storage) {}

  public setToken(token: string) {
    this.storage.set('token', token);
  }

  public getToken() {
    return this.storage.get('token');
  }

  public removeToken() {
    return this.storage.clear();
  }
}
