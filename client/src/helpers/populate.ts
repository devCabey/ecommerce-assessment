import { IOrder, IProduct } from '../types';

export const populateOrder = async (
  orders: IOrder[],
  products: IProduct[]
): Promise<IOrder[]> => {
  const populatedData = orders.map((order) => {
    return {
      ...order,
      product: products.find((product) => order.product === product.id),
    };
  });
  return populatedData;
};
