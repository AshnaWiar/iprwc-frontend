import {ProductInterface} from '../interfaces/product-interface';
import {Category} from '../../category/models/category';

export class Product implements ProductInterface {

  brand: string;
  description: string;
  descriptionShort: string;
  image: string;
  price: number;
  spec: string;
  title: string;
  id: string;
  category: Category;


  constructor() {
    this.brand = '';
    this.description = '';
    this.descriptionShort = '';
    this.image = '';
    this.price = 0;
    this.spec = '';
    this.title = '';
    this.id = '';
    this.category = new Category();
  }
}
