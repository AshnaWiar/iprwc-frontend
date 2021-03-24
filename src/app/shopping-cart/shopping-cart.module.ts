import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartViewComponent} from './views/cart-view/cart-view.component';
import {SharedModule} from '../shared/shared.module';
import {ShoppingCartRoutingModule} from './shopping-cart-routing.module';

@NgModule({
  declarations: [
    CartViewComponent
  ],
  exports: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule {
}
