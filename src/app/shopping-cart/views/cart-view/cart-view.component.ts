import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Subscription} from 'rxjs';
import {ShoppingCartInterface} from '../../interfaces/shopping-cart-interface';
import {ShoppingCartItemInterface} from '../../interfaces/shopping-cart-item-interface';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {Router} from '@angular/router';
import {OrderInterface} from '../../../order/interfaces/order-interface';
import {OrderItemInterface} from '../../../order/interfaces/order-item-interface';
import {OrderService} from '../../../order/services/order.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit, OnDestroy {
  shoppingCart: ShoppingCartInterface;
  private subscription?: Subscription;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private authenticationService: AuthenticationService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.shoppingCart = shoppingCartService.getShoppingCart();
  }

  ngOnInit(): void {
    this.subscription = this.shoppingCartService.onChange(shoppingCart => {
      this.shoppingCart = shoppingCart;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getCartItems(): ShoppingCartItemInterface[] {
    return this.shoppingCart.getCartItems();
  }

  getTotalPrice(): number {
    return this.shoppingCart.getTotalPrice();
  }

  finishOrder(): void {
    if (this.authenticationService.isLoggedIn()) {
      const order = this.mapCartToOrder();

      this.orderService.store(order).subscribe(
        value => {
          this.onOnderStored();
        },
        error => {
          console.log(error);
        }
      );

      return;
    }

    this.router.navigate(['/auth', 'login'], {queryParams: {redirect: '/cart'}});
  }

  private mapCartToOrder(): OrderInterface {

    const orderItems: OrderItemInterface[] = [];
    this.shoppingCart.getCartItems().forEach(value => {
      orderItems.push({
        amount: value.amount,
        price: value.price,
        product: value.product,
        productTitle: value.product.title,
      } as OrderItemInterface);
    });

    return {orderItems} as OrderInterface;
  }

  private onOnderStored(): void {
    this.shoppingCartService.clear();
    this.router.navigate(['/order-placed']);
  }

  clearCart(): void {
    this.shoppingCartService.clear();
  }

  updateCartItemAmount(item: ShoppingCartItemInterface): void {
    this.shoppingCartService.updateAmount(item, item.amount);
  }
}
