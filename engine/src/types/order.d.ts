import { Product } from './product';

export interface OrderItem {
  product: string | Product;
  quantity: number;
}
export interface Order {
  cart: OrderItem[];
  amount: number;
}
