import {Component, OnDestroy, OnInit} from '@angular/core';
import {IndexTableInterface} from '../../../shared/interfaces/index-table-interface';
import {CategoryService} from '../../services/category.service';
import {Router} from '@angular/router';
import {CategoryInterface} from '../../interfaces/category-interface';
import {Category} from '../../models/category';
import {Subscription} from 'rxjs';

enum Page {
  CREATE, EDIT, LIST
}

@Component({
  selector: 'app-list-category-view',
  templateUrl: './list-category-view.component.html',
  styleUrls: ['./list-category-view.component.scss']
})
export class ListCategoryViewComponent implements OnInit, OnDestroy {
  categoryIndexTable: IndexTableInterface;
  editableCategory: CategoryInterface;
  private currentPage: Page = Page.LIST;
  private subscriptions: Subscription[];

  constructor(
    private categoryService: CategoryService,
  ) {
    this.categoryIndexTable = {columns: ['name'], dataObjects: []};
    this.editableCategory = new Category();
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.fetchAllCategories();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  setCurrentPage(page: Page): void {
    this.currentPage = page;
  }

  isCreatePage(): boolean {
    return this.currentPage === Page.CREATE;
  }

  isEditPage(): boolean {
    return this.currentPage === Page.EDIT;
  }

  isListPage(): boolean {
    return this.currentPage === Page.LIST;
  }

  showCreateView(): void {
    this.setCurrentPage(Page.CREATE);
  }

  showListView(): void {
    this.setCurrentPage(Page.LIST);
  }

  deleteCategory(categories: CategoryInterface[]): void {
    categories.forEach(category => {
      const subscription = this.categoryService.delete(category.id).subscribe(
        value => {
          this.deleteLocally(category);
          this.fetchAllCategories();
          subscription.unsubscribe();
        },
        error => {
          console.log(error);
        }
      );

      this.subscriptions.push(subscription);
    });
  }

  showEditPage(category: CategoryInterface): void {
    this.editableCategory = category;
    this.setCurrentPage(Page.EDIT);
  }

  createCategory(category: Category): void {
    const subscription = this.categoryService.store(category).subscribe(
      value => {
        this.setCurrentPage(Page.LIST);
        this.fetchAllCategories();
        subscription.unsubscribe();
      },
      error => {
        console.log(error);
      }
    );

    this.subscriptions.push(subscription);
  }

  updateCategory(category: Category): void {
    const subscription = this.categoryService.put(category).subscribe(
      value => {
        console.log(value);
        subscription.unsubscribe();
      },
      error => {
        console.log(error);
      }
    );

    this.subscriptions.push(subscription);
    this.setCurrentPage(Page.LIST);
  }

  private deleteLocally(category: CategoryInterface): void {
    this.categoryIndexTable.dataObjects = this.categoryIndexTable.dataObjects.filter(c => c.id !== category.id);
  }

  private fetchAllCategories(): void {
    const subscription = this.categoryService.getAll().subscribe(
      value => {
        this.categoryIndexTable.dataObjects = value;
        subscription.unsubscribe();
      },
      error => {
        console.log(error);
      }
    );

    this.subscriptions.push(subscription);
  }
}
