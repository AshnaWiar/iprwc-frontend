import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceIndexTableComponent } from './resource-index-table.component';

describe('ResourceIndexTableComponent', () => {
  let component: ResourceIndexTableComponent;
  let fixture: ComponentFixture<ResourceIndexTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceIndexTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceIndexTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
