import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryInterface} from '../../../category/interfaces/category-interface';
import {CategoryService} from '../../../category/services/category.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-landing-page-view',
  templateUrl: './landing-page-view.component.html',
  styleUrls: ['./landing-page-view.component.scss']
})
export class LandingPageViewComponent implements OnInit, OnDestroy {

  categories: CategoryInterface[];
  private readonly subscriptions: Subscription[];

  constructor(private categoryService: CategoryService) {
    this.categories = [];
    this.subscriptions = [];
  }

  ngOnInit(): void {
    console.log('called');
    const subscription = this.categoryService.getAll().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.log(error);
      }
    );

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
