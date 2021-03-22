import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryViewComponent } from './list-category-view.component';

describe('ListCategoryViewComponent', () => {
  let component: ListCategoryViewComponent;
  let fixture: ComponentFixture<ListCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
