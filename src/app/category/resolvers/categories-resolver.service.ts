import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CategoryService} from '../services/category.service';
import {CategoryInterface} from '../interfaces/category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesResolver implements Resolve<Array<CategoryInterface>> {

  constructor(
    private service: CategoryService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<CategoryInterface>> {
    return this.service.getAll();
  }
}
