import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../interfaces/product-interface';
import {ProductService} from '../../service/product.service';
import {IndexTableInterface} from '../../../shared/interfaces/index-table-interface';
import {ActionRequestInterface} from '../../../shared/interfaces/action-request-interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-index-products',
  templateUrl: './table-index-products.component.html',
  styleUrls: ['./table-index-products.component.scss']
})
export class TableIndexProductsComponent implements OnInit {
  productIndexTable: IndexTableInterface;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {
    this.productIndexTable = {columns: ['title', 'description', 'price'], dataObjects: []};
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      value => {
        this.productIndexTable.dataObjects = value;
      },
      error => {
        console.log(error);
      });
  }

  onAction(actionRequest: ActionRequestInterface): void {
    switch (actionRequest.action) {
      case 'edit':
        this.navigateAway(actionRequest.selectedObjects[0]);
        break;
      case 'delete':
        this.deleteProducts(actionRequest.selectedObjects);
        break;
    }
  }

  private deleteProducts(products: Array<any>): void {

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < products.length; i++) {
      const product = products[i] as ProductInterface;

      this.productService.delete(product.id).subscribe(
        value => {
          console.log(value);
        },
        error => {
          console.log(error);
        }
      );
      this.productIndexTable.dataObjects = this.productIndexTable.dataObjects.filter(p => p.id !== product.id);
    }
  }

  navigateAway(product?: ProductInterface): void {
    setTimeout(() => {
      if (product === undefined) {
        this.router.navigate(['/product/create']);
        return;
      }

      this.router.navigate(['product', product?.id, 'edit']);
    }, 1000);
  }
}
