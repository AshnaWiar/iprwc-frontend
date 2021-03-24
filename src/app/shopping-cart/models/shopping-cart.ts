import {ShoppingCartInterface} from '../interfaces/shopping-cart-interface';
import {ShoppingCartItemInterface} from '../interfaces/shopping-cart-item-interface';


export class ShoppingCart implements ShoppingCartInterface {


  private readonly shoppingCart: Array<ShoppingCartItemInterface>;

  constructor(items?: Array<ShoppingCartItemInterface>) {
    this.shoppingCart = items === undefined ? [] : items;
  }

  /**
   * Adds an item to the shoppingCart.
   *
   * If the item already exist in the shoppingCart only the amount will be updated.
   *
   * @param item The item to store in the shoppingCart.
   */
  add(item: ShoppingCartItemInterface): void {

    let cartItem: ShoppingCartItemInterface;

    if (this.itemExist(item)) {

      cartItem = this.getItemFromCart(item) as ShoppingCartItemInterface;
      this.increaseCartItemAmount(cartItem, item.amount);
      return;
    }

    // break the reference from the parameter.
    // tslint:disable-next-line:no-shadowed-variable
    cartItem = Object.assign({}, item);

    this.shoppingCart.push(cartItem);
  }

  private itemExist(item: ShoppingCartItemInterface): boolean {
    return typeof this.getItemFromCart(item) !== 'undefined';
  }

  private increaseCartItemAmount(cartItem: ShoppingCartItemInterface, amount: number): void {
    cartItem.amount += amount;
  }

  private getItemFromCart(item: ShoppingCartItemInterface): ShoppingCartItemInterface | undefined {
    return this.shoppingCart.find(cartItem => cartItem.id === item.id);
  }

  /**
   * Removes the item from the shoppingCart,
   * by reducing the amount value of the stored ShoppingCartItemInterface in the shoppingCart.
   *
   * If the shoppingCart doesn't contain ```item``` it will return false, otherwise true will be retured.
   *
   * If the amount value of the stored item reaches zero or is below zero, the reference will be removed from the shoppingCart.
   *
   * @param item The item to remove from the shoppingCart
   */
  remove(item: ShoppingCartItemInterface): boolean {

    if (!this.itemExist(item)) {
      return false;
    }

    const cartItem = this.getItemFromCart(item) as ShoppingCartItemInterface;
    this.reduceItemAmount(cartItem, item.amount);
    return true;
  }

  private reduceItemAmount(cartItem: ShoppingCartItemInterface, amount: number): void {
    const reducedAmount = cartItem.amount - amount;

    if (reducedAmount <= 0) {
      this.removeFromCart(cartItem);
    }

    cartItem.amount = reducedAmount;
  }

  private removeFromCart(cartItem: ShoppingCartItemInterface): void {
    const indexOfCartItem = this.shoppingCart.indexOf(cartItem);
    this.shoppingCart.splice(indexOfCartItem, 1);
  }

  getTotalPrice(): number {
    return this.getCartItems().reduce((previousAmount, currentItem) => previousAmount + (currentItem.price * currentItem.amount), 0);
  }

  getTotalAmountItems(): number {
    let totalAmount = 0;
    this.getCartItems().forEach(value => {
      totalAmount += value.amount;
    });

    return totalAmount;
  }

  isEmpty(): boolean {
    return this.shoppingCart.length === 0;
  }

  getCartItems(): ShoppingCartItemInterface[] {
    return this.shoppingCart;
  }

  hasItems(): boolean {
    return this.getCartItems().length > 0;
  }

}
