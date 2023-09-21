import { IProduct } from './product';

export interface ICart {
  product: IProduct | string | undefined;
  quantity: number;
}
