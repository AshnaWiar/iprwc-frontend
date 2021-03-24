import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AccountInterface} from '../interfaces/account-interface';
import {ShoppingCartInterface} from '../../shopping-cart/interfaces/shopping-cart-interface';
import {OrderInterface} from '../../order/interfaces/order-interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly endpoint: string;

  constructor(private api: ApiService) {
    this.endpoint = environment.endpoints.account;
  }

  getAll(): Observable<AccountInterface[]> {
    return this.api.get(this.endpoint);
  }

  get(id: string): Observable<object> {
    return this.api.get(this.endpoint + id);
  }

  getOrders(): Observable<OrderInterface> {
    return this.api.get(`${this.endpoint}/orders`);
  }

  store(account: AccountInterface): Observable<object> {
    return this.api.post(this.endpoint + account.id, account);

  }

  put(account: AccountInterface): Observable<object> {
    return this.api.put(this.endpoint, account);

  }

  delete(id: string): Observable<object> {
    return this.api.delete(this.endpoint + id);
  }

  storeOrder(orderInterface: OrderInterface): Observable<OrderInterface> {
    return this.api.post<OrderInterface>(`${this.endpoint}/order`, orderInterface);
  }
}
