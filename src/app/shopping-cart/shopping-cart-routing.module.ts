import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartViewComponent} from './views/cart-view/cart-view.component';

const routes: Routes = [
  {path: 'cart', component: CartViewComponent, pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {
}
