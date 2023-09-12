import { OrderItemInterface } from 'interfaces/order-item';
import { SupplierInterface } from 'interfaces/supplier';
import { GetQueryInterface } from 'interfaces';

export interface PartInterface {
  id?: string;
  name: string;
  price: number;
  stock_level: number;
  supplier_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  supplier?: SupplierInterface;
  _count?: {
    order_item?: number;
  };
}

export interface PartGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  supplier_id?: string;
}
