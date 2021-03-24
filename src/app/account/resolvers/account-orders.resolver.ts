import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AccountService} from '../services/account.service';
import {OrderInterface} from '../../order/interfaces/order-interface';

@Injectable({
  providedIn: 'root'
})
export class AccountOrdersResolver implements Resolve<OrderInterface> {

  constructor(private accountService: AccountService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OrderInterface> {
    return this.accountService.getOrders();
  }
}
