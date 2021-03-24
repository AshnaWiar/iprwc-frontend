import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {OrderInterface} from '../interfaces/order-interface';
import {OrderService} from '../services/order.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersResolver implements Resolve<OrderInterface[]> {

  constructor(private orderService: OrderService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OrderInterface[]> {
    return this.orderService.getAll();
  }
}
