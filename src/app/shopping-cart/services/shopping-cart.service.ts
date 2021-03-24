import {Injectable, EventEmitter} from '@angular/core';
import {ShoppingCartInterface} from '../interfaces/shopping-cart-interface';
import {ShoppingCartItemInterface} from '../interfaces/shopping-cart-item-interface';
import {environment} from '../../../environments/environment';
import {ShoppingCart} from '../models/shopping-cart';
import {Subscription} from 'rxjs';
import {LocalStorageService} from '../../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private readonly localstorageKey: string;
  private shoppingCartEventEmitter: EventEmitter<ShoppingCartInterface>;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.localstorageKey = environment.localstorageKeys.shoppingCart;
    this.shoppingCartEventEmitter = new EventEmitter();
  }

  add(shoppingCartItem: ShoppingCartItemInterface): void {
    const cart = this.getShoppingCart();
    cart.add(shoppingCartItem);
    this.storeShoppingCart(cart);
  }

  remove(shoppingCartItem: ShoppingCartItemInterface): void {
    const cart = this.getShoppingCart();
    cart.remove(shoppingCartItem);
    this.storeShoppingCart(cart);
  }


  updateAmount(item: ShoppingCartItemInterface, amount: number): void {
    const cart = this.getShoppingCart();
    cart.updateAmount(item, amount);
    this.storeShoppingCart(cart);
  }

  onChange(callback: (shoppingCart: ShoppingCartInterface) => void): Subscription {
    return this.shoppingCartEventEmitter.subscribe(callback);
  }

  clear(): void {
    this.storeShoppingCart(new ShoppingCart());
  }

  getShoppingCart(): ShoppingCartInterface {
    let shoppingCartItems = this.localStorageService.getObject<ShoppingCartItemInterface[]>(this.localstorageKey);

    if (shoppingCartItems === null) {
      shoppingCartItems = [];
    }

    return new ShoppingCart(shoppingCartItems);
  }


  private storeShoppingCart(shoppingCart: ShoppingCartInterface): void {
    this.localStorageService.setObject(this.localstorageKey, shoppingCart.getCartItems());
    this.shoppingCartEventEmitter.emit(shoppingCart);
  }

}
