import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryInterface} from '../../interfaces/category-interface';
import {Category} from '../../models/category';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-create-category',
  templateUrl: './form-create-category.component.html',
  styleUrls: ['./form-create-category.component.scss']
})
export class FormCreateCategoryComponent implements OnInit {

  @Input()
  category: CategoryInterface;

  @Output()
  createCategoryRequest: EventEmitter<Category>;

  constructor() {
    this.category = new Category();
    this.createCategoryRequest = new EventEmitter<Category>();
  }

  ngOnInit(): void {
  }

  onFormSubmit(createCategoryForm: NgForm): void {
    if (createCategoryForm.invalid) {
      return;
    }

    this.createCategoryRequest.emit(this.category);
  }
}
