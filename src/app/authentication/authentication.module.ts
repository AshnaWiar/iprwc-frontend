import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// modules
import {FormsModule} from '@angular/forms';
import {AuthenticationRoutingModule} from './authentication-routing.module';

// components
import {FormLoginComponent} from './components/form-login/form-login.component';

// views
import {LoginViewComponent} from './views/login-view/login-view.component';
import {RegisterViewComponent} from './views/register-view/register-view.component';
import {AccountModule} from '../account/account.module';


@NgModule({
  declarations: [
    LoginViewComponent,
    FormLoginComponent,
    RegisterViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
    AccountModule
  ]
})
export class AuthenticationModule {
}
