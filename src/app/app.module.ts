import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// modules
import {AppRoutingModule} from './app-routing.module';
import {AccountModule} from './account/account.module';
import {SharedModule} from './shared/shared.module';
import {PagesModule} from './pages/pages.module';

// components
import {AppComponent} from './app.component';

// interceptors
import {AuthInterceptor} from './authentication/interceptors/auth-interceptor.service';

// resolvers
import {AuthenticationModule} from './authentication/authentication.module';
import {CategoryModule} from './category/category.module';
import {ShoppingCartModule} from './shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    AuthenticationModule,
    AccountModule,
    CategoryModule,
    PagesModule,
    ShoppingCartModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
