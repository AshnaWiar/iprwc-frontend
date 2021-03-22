import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AccountInterface} from '../interfaces/account-interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly endpoint: string;

  constructor(private api: ApiService) {
    this.endpoint = environment.endpoints.USERS;
  }

  getAll(): Observable<Array<object>> {
    return this.api.get(this.endpoint);
  }

  get(id: string): Observable<object> {
    return this.api.get(this.endpoint + id);
  }

  store(account: AccountInterface): Observable<object> {
    return this.api.post(this.endpoint + account.id, account);

  }

  put(account: AccountInterface): Observable<object> {
    return this.api.put(this.endpoint + account.id, account);

  }

  delete(id: string): Observable<object> {
    return this.api.delete(this.endpoint + id);
  }

}
