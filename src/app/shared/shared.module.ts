import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourceIndexTableComponent} from './components/resource-index-table/resource-index-table.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ResourceIndexTableComponent
  ],
  exports: [
    ResourceIndexTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
