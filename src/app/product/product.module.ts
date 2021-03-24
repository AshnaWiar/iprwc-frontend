import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableIndexProductsComponent} from './components/table-index-products/table-index-products.component';
import {FormCreateProductComponent} from './components/form-create-product/form-create-product.component';
import {CreateProductViewComponent} from './views/create-product-view/create-product-view.component';
import {EditProductViewComponent} from './views/edit-product-view/edit-product-view.component';
import {ProductListViewComponent} from './views/list-product-view/product-list-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';


@NgModule({
  declarations: [
    TableIndexProductsComponent,
    FormCreateProductComponent,
    EditProductViewComponent,
    CreateProductViewComponent,
    ProductListViewComponent,
    ProductListItemComponent
  ],
  exports: [
    CreateProductViewComponent,
    ProductListViewComponent,
    ProductListItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductModule {
}
