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
  return orders;
};

export const getTotalCartItems = async (
  orderData: IOrder[]
): Promise<number> => {
  let total = 0;
  for (let i = 0; i < orderData.length; i++) {
    total += orderData[i].quantity;
  }
  return total;
};
