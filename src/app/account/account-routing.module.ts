import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersListViewComponent} from '../order/view/orders-list-view/orders-list-view.component';
import {AccountOrdersResolver} from './resolvers/account-orders.resolver';
import {ProfileViewComponent} from './views/profile/profile-view.component';
import {ProductListViewComponent} from '../product/views/list-product-view/product-list-view.component';
import {ProductsResolver} from '../product/resolvers/products.resolver';
import {CategoriesResolver} from '../category/resolvers/categories-resolver.service';
import {CategoriesListViewComponent} from '../category/views/list-category-view/categories-list-view.component';
import {AccountEditViewComponent} from './views/account-edit-view/account-edit-view.component';
import {AccountsResolver} from './resolver/accounts.resolver';
import {AccountsListViewComponent} from './views/accounts-list-view/accounts-list-view.component';
import {AuthenticatedGuard} from '../authentication/guards/authenticated.guard';

const routes: Routes =
  [
    {
      path: 'account', children: [
        {path: '', redirectTo: 'profile', pathMatch: 'full'},
        {
          path: 'profile', component: ProfileViewComponent, children: [
            {
              path: 'orders', component: OrdersListViewComponent, pathMatch: 'full',
              canActivate: [AuthenticatedGuard],
              resolve: {
                orders: AccountOrdersResolver
              }
            },
            {
              path: 'account', component: AccountEditViewComponent, pathMatch: 'full', resolve: {
                categories: CategoriesResolver,
              }
            },
            {
              path: 'products', component: ProductListViewComponent, pathMatch: 'full',
              canActivate: [AuthenticatedGuard],
              resolve: {
                products: ProductsResolver,
                categories: CategoriesResolver,
              }
            },
            {
              path: 'categories', component: CategoriesListViewComponent, pathMatch: 'full',
              canActivate: [AuthenticatedGuard],
              resolve: {
                categories: CategoriesResolver,
              }
            },
            {
              path: 'accounts', component: AccountsListViewComponent, pathMatch: 'full',
              canActivate: [AuthenticatedGuard],
              resolve: {
                accounts: AccountsResolver
              }
            }
          ]
        },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
