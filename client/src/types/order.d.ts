import { IProduct } from './product';

export interface IOrder {
  product: IProduct | string | undefined;
  quantity: number;
}

export interface IOrderContext {
  order: IOrder[];
  setOrder: any;
}
