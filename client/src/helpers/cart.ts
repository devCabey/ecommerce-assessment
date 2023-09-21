import { ICart, IProduct } from '../types';

export const getTotalCartItems = async (order: ICart[]): Promise<number> => {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i].quantity;
  }
  return total;
};

export const getTotalAmount = async (order: ICart[]): Promise<number> => {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    let price = (order[i].product as IProduct).price;
    if (price) {
      total += order[i].quantity * price;
    }
  }
  return total;
};
