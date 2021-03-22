import {Component, OnInit} from '@angular/core';
import {Category} from '../../../category/models/category';
import {CategoryInterface} from '../../../category/interfaces/category-interface';
import {CategoryService} from '../../../category/services/category.service';

@Component({
  selector: 'app-index-view',
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.scss']
})
export class IndexViewComponent implements OnInit {
  categories: CategoryInterface[];

  constructor(private categoryService: CategoryService) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.log(error);
      }
    );

  }

}
