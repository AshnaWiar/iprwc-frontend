import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourceIndexTableComponent} from './components/resource-index-table/resource-index-table.component';
import {FormsModule} from '@angular/forms';
import {NavBarComponentComponent} from './components/nav-bar-component/nav-bar-component.component';
import {RouterModule} from '@angular/router';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticatedDirective} from './directives/authenticated.directive';
import { AuthorizedDirective } from './directives/authorized.directive';

@NgModule({
  declarations: [
    ResourceIndexTableComponent,
    NavBarComponentComponent,
    AuthenticatedDirective,
    AuthorizedDirective
  ],
  exports: [
    ResourceIndexTableComponent,
    NavBarComponentComponent,
    AuthorizedDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbDropdownModule,
  ]
})
export class SharedModule {
}
