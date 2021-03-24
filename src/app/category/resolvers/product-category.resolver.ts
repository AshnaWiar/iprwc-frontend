import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductInterface} from '../../product/interfaces/product-interface';
import {CategoryService} from '../services/category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryResolver implements Resolve<ProductInterface> {

  constructor(
    private categoryService: CategoryService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInterface> {
    return this.categoryService.getProductsWithCategory(route.params.category);
  }
}
