import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderEditViewComponent } from './view/order-edit-view/order-edit-view.component';
import { OrdersListViewComponent } from './view/orders-list-view/orders-list-view.component';



@NgModule({
  declarations: [OrderEditViewComponent, OrdersListViewComponent],
  exports: [
    OrderEditViewComponent,
    OrdersListViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
