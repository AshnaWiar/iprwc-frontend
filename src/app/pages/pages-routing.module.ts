import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// resolvers
import {CategoriesResolver} from '../category/resolvers/categories-resolver.service';

// components
import {LandingPageViewComponent} from './views/landing-page-view/landing-page-view.component';
import {OrderPlacedViewComponent} from './views/order-placed-view/order-placed-view.component';

const routes: Routes = [
    {
      path: '', component: LandingPageViewComponent, pathMatch: 'full', resolve: {
        categories: CategoriesResolver
      },
    },
    {
      path: 'order-placed', component: OrderPlacedViewComponent, pathMatch: 'full'
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
