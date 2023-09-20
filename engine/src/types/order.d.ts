import { Product } from './product';

export interface OrderInput {
  product: string;
  quantity: number;
}

export interface Order {
  product: string | Product;
  quantity: number;
}
