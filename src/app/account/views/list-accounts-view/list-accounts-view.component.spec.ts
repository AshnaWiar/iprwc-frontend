import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountsViewComponent } from './list-accounts-view.component';

describe('ListAccountsViewComponent', () => {
  let component: ListAccountsViewComponent;
  let fixture: ComponentFixture<ListAccountsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccountsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccountsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
