import { ICart, IProduct } from '../types';

export const populateOrder = async (
  orders: ICart[],
  products: IProduct[]
): Promise<ICart[]> => {
  const populatedData = orders.map((order) => {
    return {
      ...order,
      product: products.find((product) => order.product === product.id),
    };
  });
  return populatedData;
};
