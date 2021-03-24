import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlacedViewComponent } from './order-placed-view.component';

describe('OrderPlacedViewComponent', () => {
  let component: OrderPlacedViewComponent;
  let fixture: ComponentFixture<OrderPlacedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPlacedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPlacedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
