import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductViewComponent } from './list-product-view.component';

describe('ListProductViewComponent', () => {
  let component: ListProductViewComponent;
  let fixture: ComponentFixture<ListProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
