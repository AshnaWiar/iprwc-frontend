import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {ProductInterface} from '../../product/interfaces/product-interface';
import {CategoryInterface} from '../interfaces/category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly endpoint: string;

  constructor(private api: ApiService) {
    this.endpoint = environment.endpoints.category;
  }

  getAll(): Observable<Array<CategoryInterface>> {
    return this.api.get(this.endpoint);
  }

  get(id: string): Observable<CategoryInterface> {
    return this.api.get(this.endpoint + id);
  }

  getProductsWithCategory(categoryId: string): Observable<ProductInterface> {
    return this.api.get(`${this.endpoint}/${categoryId}/products`);
  }

  store(category: CategoryInterface): Observable<object> {
    return this.api.post(this.endpoint, category);
  }

  put(category: CategoryInterface): Observable<object> {
    return this.api.put(this.endpoint, category);
  }

  delete(id: string): Observable<object> {
    return this.api.delete(`${this.endpoint}/${id}`);
  }
}
