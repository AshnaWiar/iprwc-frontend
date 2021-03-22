import {AccountInterface} from '../interfaces/account-interface';

export class Account implements AccountInterface {
  city: string;
  houseNumber: string;
  id: string;
  role: string;
  name: string;
  orders: any;
  password: string;
  postalCode: string;
  streetName: string;
  username: string;
  firstName: string;
  jwtToken: string;
  lastName: string;

  constructor() {
    this.city = '';
    this.houseNumber = '';
    this.id = '';
    this.name = '';
    this.orders = '';
    this.password = '';
    this.postalCode = '';
    this.streetName = '';
    this.username = '';
    this.role = '';
    this.firstName = '';
    this.lastName = '';
    this.jwtToken = '';
  }


}
