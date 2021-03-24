import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEditViewComponent } from './account-edit-view.component';

describe('AccountEditViewComponent', () => {
  let component: AccountEditViewComponent;
  let fixture: ComponentFixture<AccountEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
