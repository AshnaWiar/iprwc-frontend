import { TestBed } from '@angular/core/testing';

import { OrdersResolver } from './orders.resolver';

describe('OdersResolver', () => {
  let resolver: OrdersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OrdersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
