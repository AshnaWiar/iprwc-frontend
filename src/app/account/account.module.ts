import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

import {SharedModule} from '../shared/shared.module';

import {FormLoginComponent} from './components/form-login/form-login.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {ProfileComponent} from './views/profile/profile.component';
import {FormRegisterComponent} from './components/form-register/form-register.component';
import {OverviewAccountComponent} from './components/overview-account/overview-account.component';
import {ProductModule} from '../product/product.module';
import {CategoryModule} from '../category/category.module';
import {ListAccountsViewComponent} from './views/list-accounts-view/list-accounts-view.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FormLoginComponent,
    FormRegisterComponent,
    OverviewAccountComponent,
    ListAccountsViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbNavModule,
    SharedModule,
    ProductModule,
    CategoryModule,
  ],
})
export class AccountModule {
}
