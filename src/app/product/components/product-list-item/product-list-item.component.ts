import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInterface} from '../../interfaces/product-interface';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {

  @Input()
  product: ProductInterface;

  @Output()
  addToCart: EventEmitter<ProductInterface>;

  constructor() {
    this.product = new Product();
    this.addToCart = new EventEmitter<ProductInterface>();
  }

  onAddToCartButtonClick(product: ProductInterface): void {
    this.addToCart.emit(product);
  }
}
