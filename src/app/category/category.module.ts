import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormCreateCategoryComponent} from './components/form-create-category/form-create-category.component';
import {ListCategoryViewComponent} from './views/list-category-view/list-category-view.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FormCreateCategoryComponent,
    ListCategoryViewComponent
  ],
  exports: [
    ListCategoryViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class CategoryModule {
}
