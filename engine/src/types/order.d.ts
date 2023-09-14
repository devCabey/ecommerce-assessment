import { Product } from './product';

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface OrderInput {
  orderId: string;
  cart: OrderItem[];
  amount: number;
}
export interface Order {
  id: string;
  cart: OrderItem[];
  amount: number;
}
