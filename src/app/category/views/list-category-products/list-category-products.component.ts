import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../../product/interfaces/product-interface';
import {ActivatedRoute} from '@angular/router';
import {ShoppingCartService} from '../../../shopping-cart/services/shopping-cart.service';
import {ShoppingCartItemInterface} from '../../../shopping-cart/interfaces/shopping-cart-item-interface';

@Component({
  selector: 'app-list-category-products',
  templateUrl: './list-category-products.component.html',
  styleUrls: ['./list-category-products.component.scss']
})
export class ListCategoryProductsComponent implements OnInit {
  products: ProductInterface[];

  constructor(
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.products;
  }

  addToCart(product: ProductInterface): void {

    const shoppingCartItem = {
      id: product.id,
      description: product.descriptionShort,
      price: product.price,
      title: product.title,
      image: product.image,
      amount: 1
    } as ShoppingCartItemInterface;

    this.shoppingCartService.add(shoppingCartItem);
  }

  addProductToCart(product: ProductInterface): void {
    const shoppingCartItem = {
      id: product.id,
      description: product.descriptionShort,
      price: product.price,
      title: product.title,
      image: product.image,
      amount: 1,
      product,
    } as ShoppingCartItemInterface;

    this.shoppingCartService.add(shoppingCartItem);
  }
}
