import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {ProductInterface} from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly endpoint: string;

  constructor(
    public api: ApiService
  ) {
    this.endpoint = environment.endpoints.PRODUCT;
  }

  getAll(): Observable<Array<ProductInterface>> {
    return this.api.get(this.endpoint);
  }

  get(id: string): Observable<ProductInterface> {
    return this.api.get(`${this.endpoint}/${id}`);
  }

  store(product: ProductInterface): Observable<object> {
    return this.api.post(this.endpoint, product);
  }

  put(product: ProductInterface): Observable<object> {
    return this.api.put(`${this.endpoint}/${product.id}`, product);
  }

  delete(id: string): Observable<object> {
    return this.api.delete(`${this.endpoint}/${id}`);
  }

}
