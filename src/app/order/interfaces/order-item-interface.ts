import {ProductInterface} from '../../product/interfaces/product-interface';

export interface OrderItemInterface {
  product: ProductInterface;
  productTitle: string;
  price: number;
  amount: number;
}
