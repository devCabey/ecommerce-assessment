import { IProduct } from './product';

export interface IOrder {
  product: IProduct | string | undefined;
  quantity: number;
}
