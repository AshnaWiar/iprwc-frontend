import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormCreateCategoryComponent} from './components/form-create-category/form-create-category.component';
import {CategoriesListViewComponent} from './views/list-category-view/categories-list-view.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CategoryRoutingModule} from './category-routing.module';
import {ListCategoryProductsComponent} from './views/list-category-products/list-category-products.component';
import {ProductCategoryResolver} from './resolvers/product-category.resolver';
import {ProductModule} from '../product/product.module';


@NgModule({
  declarations: [
    FormCreateCategoryComponent,
    CategoriesListViewComponent,
    ListCategoryProductsComponent,
  ],
  exports: [
    CategoriesListViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CategoryRoutingModule,
    ProductModule
  ],
})
export class CategoryModule {
}
