import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Account} from "../../../models/Account";

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  public getAccounts() : Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.API}accounts`);
  }

  public addAccount(account: Account) : Observable<Account> {
    return this.http.post<Account>(`${environment.API}accounts`, account, {});
  }

  public deleteAccount(account: Account) : Observable<Account> {
    return this.http.delete<Account>(`${environment.API}accounts/${account._id}`)
  }

  public editAccount(account: Account) : Observable<Account> {
    return this.http.patch<Account>(`${environment.API}accounts`, account, {});
  }

}
