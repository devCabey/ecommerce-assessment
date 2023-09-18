import { orderData } from '../data';
import { IOrder } from '../types';

export const addToCart = async (id: string): Promise<IOrder[]> => {
  const cartItem = orderData.findIndex((data) => data.product === id);
  if (cartItem >= 0) {
    orderData[cartItem].quantity++;
  } else {
    orderData.push({
      product: id,
      quantity: 1,
    });
  }
  return orderData;
};

export const removeFromCart = async (id: string): Promise<IOrder[]> => {
  const orders = orderData.filter((data) => data.product == id);
  console.log(orders);
  return orders;
};
