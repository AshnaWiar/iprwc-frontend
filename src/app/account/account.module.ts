import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';


import {FormCreateAccountComponent} from './components/form-create-account/form-create-account.component';
import {ProfileViewComponent} from './views/profile/profile-view.component';

import {AccountRoutingModule} from './account-routing.module';
import {CategoryModule} from '../category/category.module';
import {ProductModule} from '../product/product.module';
import {OrderModule} from '../order/order.module';
import {AccountEditViewComponent} from './views/account-edit-view/account-edit-view.component';
import {SharedModule} from '../shared/shared.module';
import {AccountsListViewComponent} from './views/accounts-list-view/accounts-list-view.component';


@NgModule({
  declarations: [
    ProfileViewComponent,
    FormCreateAccountComponent,
    AccountEditViewComponent,
    AccountsListViewComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    FormsModule,
    NgbNavModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    SharedModule,
  ],
  exports: [
    FormCreateAccountComponent
  ]
})
export class AccountModule {
}
