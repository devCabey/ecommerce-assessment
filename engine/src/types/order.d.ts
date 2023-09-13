import { Product } from './product';

export interface Order {
  product: Product | string;
  quantity: number;
}
