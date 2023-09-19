import { orderData } from '../data';
import { IOrder, IProduct } from '../types';

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
  const orders = orderData.filter((data) => data.product === id);
  return orders;
};

export const getTotalCartItems = async (order: IOrder[]): Promise<number> => {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i].quantity;
  }
  return total;
};

export const getTotalAmount = async (order: IOrder[]): Promise<number> => {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    let price = (order[i].product as IProduct).price;
    if (price) {
      total += order[i].quantity * price;
    }
  }
  return total;
};
