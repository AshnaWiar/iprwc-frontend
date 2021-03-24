import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderInterface} from '../../interfaces/order-interface';

@Component({
  selector: 'app-orders-list-view',
  templateUrl: './orders-list-view.component.html',
  styleUrls: ['./orders-list-view.component.scss']
})
export class OrdersListViewComponent implements OnInit {
  orders: OrderInterface[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.orders = this.route.snapshot.data.orders;
  }

  ngOnInit(): void {
  }

  orderNumber(order: OrderInterface): string {
    return order.id.split('-')[0];
  }

  orderStatus(order: OrderInterface): string {
    switch (order.status) {
      case 'DELIVERED':
        return 'Bezorged';
      default:
        return 'In behandeling';
    }
  }

  showOrder(order: OrderInterface): void {
    this.router.navigate(['/order', order.id]);
  }
}
