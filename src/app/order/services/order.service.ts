import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {OrderInterface} from '../interfaces/order-interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly endpoint: string;

  constructor(
    private api: ApiService
  ) {
    this.endpoint = environment.endpoints.order;
  }

  public getAll(): Observable<OrderInterface[]> {
    return this.api.get(this.endpoint);
  }

  public get(orderId: string): Observable<OrderInterface> {
    return this.api.get(`${this.endpoint}/${orderId}`);
  }

  public store(order: OrderInterface): Observable<OrderInterface> {
    return this.api.post<OrderInterface>(`${this.endpoint}`, order);
  }

}
