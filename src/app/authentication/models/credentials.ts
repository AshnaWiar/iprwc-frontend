import {CredentialsInterface} from '../interfaces/credentials-interface';

export class Credentials implements CredentialsInterface {
  constructor(public username: string, public password: string) {}
}
