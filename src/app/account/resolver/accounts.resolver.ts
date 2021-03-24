import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AccountService} from '../services/account.service';
import {AccountInterface} from '../interfaces/account-interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsResolver implements Resolve<AccountInterface[]> {
  constructor(private accountService: AccountService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AccountInterface[]> {
    return this.accountService.getAll();
  }
}
