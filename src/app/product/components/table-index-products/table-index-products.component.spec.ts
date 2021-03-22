import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIndexProductsComponent } from './table-index-products.component';

describe('TableIndexProductsComponent', () => {
  let component: TableIndexProductsComponent;
  let fixture: ComponentFixture<TableIndexProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIndexProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIndexProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
