import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEditViewComponent } from './order-edit-view.component';

describe('OrderEditViewComponent', () => {
  let component: OrderEditViewComponent;
  let fixture: ComponentFixture<OrderEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
