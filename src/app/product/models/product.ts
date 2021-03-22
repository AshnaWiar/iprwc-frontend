import {ProductInterface} from '../interfaces/product-interface';

export class Product implements ProductInterface {

  brand: string;
  description: string;
  descriptionShort: string;
  image: string;
  price: number;
  spec: string;
  title: string;
  id: string;


  constructor() {
    this.brand = '';
    this.description = '';
    this.descriptionShort = '';
    this.image = '';
    this.price = 0;
    this.spec = '';
    this.title = '';
    this.id = '';
  }
}
