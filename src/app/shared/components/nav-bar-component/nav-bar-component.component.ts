import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../../shopping-cart/services/shopping-cart.service';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.scss']
})
export class NavBarComponentComponent implements OnInit, OnDestroy {
  cartAmount: number;
  isAuthenticated: boolean;
  private subscription: Subscription[];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.cartAmount = shoppingCartService.getShoppingCart().getTotalAmountItems();
    this.subscription = [];
    this.isAuthenticated = this.authenticationService.isLoggedIn();
  }

  ngOnInit(): void {
    const subscriptionCart = this.shoppingCartService.onChange(shoppingCart => {
      this.cartAmount = shoppingCart.getTotalAmountItems();
    });

    const subscriptionAuth = this.authenticationService.onAuthentication()
      .subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);

    this.subscription.push(subscriptionAuth);
    this.subscription.push(subscriptionCart);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  authenticated(): boolean {
    return this.isAuthenticated;
  }
}
