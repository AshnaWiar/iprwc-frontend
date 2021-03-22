import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './account/views/login/login.component';
import {RegisterComponent} from './account/views/register/register.component';
import {ProfileComponent} from './account/views/profile/profile.component';
import {CreateProductViewComponent} from './product/views/create-product-view/create-product-view.component';
import {IndexViewComponent} from './catalogus/views/index-view/index-view.component';

const routes: Routes = [
  {path: '', component: IndexViewComponent},
  {path: 'account/login', component: LoginComponent},
  {path: 'account/register', component: RegisterComponent},
  {path: 'account/profile', component: ProfileComponent},
  {path: 'product/create', component: CreateProductViewComponent},
  {path: 'product/:product/edit', component: CreateProductViewComponent, pathMatch: 'full'},
  {path: 'product/:product', component: CreateProductViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
