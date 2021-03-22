import {LoginCredentialsInterface} from '../interfaces/login-credentials-interface';

export class LoginCredentials implements LoginCredentialsInterface {

  constructor(
    public readonly username: string,
    public readonly password: string
  ) {}
}
