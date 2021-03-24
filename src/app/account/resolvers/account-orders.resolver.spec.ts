import { TestBed } from '@angular/core/testing';

import { AccountOrdersResolver } from './account-orders.resolver';

describe('AccountOrdersResolver', () => {
  let resolver: AccountOrdersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AccountOrdersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
