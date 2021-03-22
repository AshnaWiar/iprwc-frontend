import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableIndexProductsComponent} from './components/table-index-products/table-index-products.component';
import {FormCreateProductComponent} from './components/form-create-product/form-create-product.component';
import {CreateProductViewComponent} from './views/create-product-view/create-product-view.component';
import {EditProductViewComponent} from './views/edit-product-view/edit-product-view.component';
import {ListProductViewComponent} from './views/list-product-view/list-product-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    TableIndexProductsComponent,
    FormCreateProductComponent,
    CreateProductViewComponent,
    EditProductViewComponent,
    ListProductViewComponent
  ],
  exports: [
    CreateProductViewComponent,
    ListProductViewComponent
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
