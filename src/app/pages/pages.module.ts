import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageViewComponent } from './views/landing-page-view/landing-page-view.component';
import { OrderPlacedViewComponent } from './views/order-placed-view/order-placed-view.component';


@NgModule({
  declarations: [LandingPageViewComponent, OrderPlacedViewComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
