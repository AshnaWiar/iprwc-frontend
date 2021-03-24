import {Category} from '../../category/models/category';
import {ShoppingCartItemInterface} from '../../shopping-cart/interfaces/shopping-cart-item-interface';

export interface ProductInterface {
  id: string;
  image: string;
  brand: string;
  title: string;
  price: number;
  spec: string;
  description: string;
  descriptionShort: string;
  category: Category;
}
