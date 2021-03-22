import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../interfaces/product-interface';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-create-product-view',
  templateUrl: './create-product-view.component.html',
  styleUrls: ['./create-product-view.component.scss']
})
export class CreateProductViewComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {}

  createProduct(product: ProductInterface): void {
    this.productService.store(product).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
