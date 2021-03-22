import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CategoryInterface} from '../interfaces/category-interface';
import {CategoryService} from '../services/category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<CategoryInterface> {

  constructor(
    private service: CategoryService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CategoryInterface> {
    return this.service.get(route.paramMap.get('id') as string);
  }
}

