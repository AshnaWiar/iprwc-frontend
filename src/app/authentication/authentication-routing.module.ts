import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginViewComponent} from './views/login-view/login-view.component';
import {NotAuthenticatedGuard} from './guards/not-authenticated.guard';
import {RegisterViewComponent} from './views/register-view/register-view.component';

const routes: Routes = [
  {
    path: 'auth', canActivate: [NotAuthenticatedGuard], children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path: 'login', component: LoginViewComponent, pathMatch: 'full'
      },
      {path: 'register', component: RegisterViewComponent, pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
