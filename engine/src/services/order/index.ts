import { Order, OrderInput, Product } from '../../types';
import { productData } from '../product';

export const orderData: Order[] = [];

export async function getOrders(populate: boolean): Promise<Order[]> {
  try {
    if (populate) {
      const populatedData = orderData?.map((order: Order) => {
        return {
          ...order,
          product: productData.find(
            (product) => order?.product === product.id
          ) as Product,
        };
      });
      return populatedData;
    } else {
      return orderData;
    }
  } catch (err) {
    throw err;
  }
}

export async function createOrder(input: OrderInput[]): Promise<Order[]> {
  try {
    if (!input.length) throw new Error('Please provide order data');
    input.forEach((data: Order) => {
      orderData.push(data);
    });
    return orderData;
  } catch (err) {
    throw err;
  }
}

export async function deleteOrder(id: string): Promise<Order[]> {
  try {
    if (!id) throw new Error('Provide the product id');
    const _orderIndex = orderData.findIndex((data) => data.product === id);
    if (_orderIndex < 0) throw new Error('Product not in your order basket');
    orderData.splice(_orderIndex, 1);
    return orderData;
  } catch (err) {
    throw err;
  }
}
