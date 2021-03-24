import {EventEmitter, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {LocalStorageService} from '../../shared/services/local-storage.service';
import {AccountInterface} from '../../account/interfaces/account-interface';
import {Account} from '../../account/models/account';
import {CredentialsInterface} from '../interfaces/credentials-interface';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly localStorageKey: string;
  private readonly endpoint: string;
  private readonly authenticationEvent: EventEmitter<boolean>;

  constructor(
    private localStorageService: LocalStorageService,
    private api: ApiService
  ) {
    this.endpoint = environment.endpoints.authentication;
    this.localStorageKey = environment.localstorageKeys.user;
    this.authenticationEvent = new EventEmitter<boolean>();
  }

  isLoggedIn(): boolean {
    return this.localStorageService.get(this.localStorageKey) !== null;
  }

  getLoggedInAccount(): AccountInterface {
    const account = this.localStorageService.getObject(this.localStorageKey) as AccountInterface;

    if (account == null) {
      return new Account();
    }

    return Object.assign({}, account);
  }

  login(credentials: CredentialsInterface): Observable<AccountInterface> {
    return this.api.post<AccountInterface>(`${this.endpoint}/login`, credentials).pipe(
      tap(x => {
        this.authenticationEvent.emit(true);
      })
    );
  }

  setLoggedInAccount(account: AccountInterface): void {
    this.localStorageService.setObject(this.localStorageKey, account);
    this.authenticationEvent.emit(true);
  }

  logout(): void {
    this.localStorageService.remove(this.localStorageKey);
    this.authenticationEvent.emit(false);
  }

  onAuthentication(): EventEmitter<boolean> {
    return this.authenticationEvent;
  }

  register(account: AccountInterface): Observable<AccountInterface> {
    return this.api.post(`${this.endpoint}/register`, account);
  }
}
