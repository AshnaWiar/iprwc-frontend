import {LoginCredentials} from './login-credentials';

describe('LoginRequest', () => {
  it('should create an instance', () => {
    expect(new LoginCredentials('', '')).toBeTruthy();
  });
});
