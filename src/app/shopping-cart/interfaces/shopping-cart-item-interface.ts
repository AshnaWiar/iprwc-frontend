import {ProductInterface} from '../../product/interfaces/product-interface';

export interface ShoppingCartItemInterface {
  id: string;
  title: string;
  description: string;
  price: number;
  amount: number;
  image: string;
  product: ProductInterface;
}
