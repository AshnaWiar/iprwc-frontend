import {CategoryInterface} from '../interfaces/category-interface';

export class Category implements CategoryInterface {
  id: string;
  image: string;
  name: string;

  constructor() {
    this.id = '';
    this.image = '';
    this.name = '';
  }
}
