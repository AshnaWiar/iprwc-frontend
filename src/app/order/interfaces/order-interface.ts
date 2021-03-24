import {AccountInterface} from '../../account/interfaces/account-interface';
import {OrderItemInterface} from './order-item-interface';

export interface OrderInterface {
  id: string;
  account: AccountInterface;
  orderItems: OrderItemInterface[];
  created_at: string;
  status: string;
}
