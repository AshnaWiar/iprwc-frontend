import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryProductsComponent} from './views/list-category-products/list-category-products.component';
import {ProductCategoryResolver} from './resolvers/product-category.resolver';

const routes: Routes = [
  {
    path: 'category/:category', component: ListCategoryProductsComponent, pathMatch: 'full', resolve: {
      products: ProductCategoryResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
