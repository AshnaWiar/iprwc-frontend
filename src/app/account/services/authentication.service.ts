import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs';
import {LoginCredentialsInterface} from '../interfaces/login-credentials-interface';
import {environment} from '../../../environments/environment';
import {AccountInterface} from '../interfaces/account-interface';
import {Account} from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly endpoint: string;

  constructor(
    private api: ApiService
  ) {
    this.endpoint = environment.endpoints.AUTHENTICATION;
  }

  register(): void {
  }

  login(loginRequest: LoginCredentialsInterface): Observable<AccountInterface> {
    return this.api.post<AccountInterface>(`${this.endpoint}/login`, loginRequest);
  }

  logout(): void {
  }

  isLoggedIn(): boolean {
    return false;
  }

  setLoggedInAccount(account: AccountInterface): void {
    localStorage.setItem('user', JSON.stringify(account));
  }

  getLoggedInAccount(): AccountInterface {
    return JSON.parse(localStorage.getItem('user') as string) as AccountInterface;
  }

}
