import { OrderInterface } from 'interfaces/order';
import { PartInterface } from 'interfaces/part';
import { GetQueryInterface } from 'interfaces';

export interface OrderItemInterface {
  id?: string;
  order_id: string;
  part_id: string;
  quantity: number;
  price: number;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  part?: PartInterface;
  _count?: {};
}

export interface OrderItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  part_id?: string;
}
