import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ProductInterface} from '../../interfaces/product-interface';
import {Product} from '../../models/product';
import {CategoryInterface} from '../../../category/interfaces/category-interface';

@Component({
  selector: 'app-form-create-product',
  templateUrl: './form-create-product.component.html',
  styleUrls: ['./form-create-product.component.scss']
})
export class FormCreateProductComponent implements OnInit {

  @Input() product: ProductInterface = new Product();
  @Input() categories: CategoryInterface[] = [];
  @Output() createProductRequest: EventEmitter<ProductInterface>;

  constructor() {
    this.createProductRequest = new EventEmitter<ProductInterface>();
  }

  ngOnInit(): void {

  }

  onFormSubmit(createProductForm: NgForm): void {

    if (createProductForm.invalid) {
      return;
    }
    console.log(this.product);
    this.createProductRequest.emit(this.product);
  }

}
