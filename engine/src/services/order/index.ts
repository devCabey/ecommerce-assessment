import { Order, OrderInput } from '../../types';
import { productData } from '../product';

export const orderData = [
  {
    product: '2',
    quantity: 5,
  },
  {
    product: '1',
    quantity: 2,
  },
];

export async function getOrders(): Promise<Order[]> {
  try {
    return orderData;
  } catch (err) {
    throw err;
  }
}

export async function createOrder(input: OrderInput): Promise<Order[]> {
  try {
    const { product, quantity } = input;
    if (!product) throw new Error('Provide the product id');
    // Check whether or not the product exist in the product array
    const _productIndex = productData.findIndex((data) => data.id === product);
    if (_productIndex < 0) throw new Error('Product not found');

    // Check whether the product is already in the cart
    const _orderIndex = orderData.findIndex((data) => data.product === product);
    if (_orderIndex < 0) {
      orderData.push({
        product,
        quantity: quantity ? quantity : 1,
      });
    } else {
      orderData[_orderIndex].quantity += quantity ? quantity : 1;
    }
    return orderData;
  } catch (err) {
    throw err;
  }
}

export async function updateOrder(input: OrderInput): Promise<Order[]> {
  try {
    const { product, quantity } = input;
    if (!product) throw new Error('Provide the product id');
    // Check whether or not the product exist in the product array
    const _productIndex = productData.findIndex((data) => data.id === product);
    if (_productIndex < 0) throw new Error('Product not found');

    // Check whether the product is already in the cart
    const _orderIndex = orderData.findIndex((data) => data.product === product);
    if (_orderIndex < 0) {
      orderData.push({
        product,
        quantity: quantity ? quantity : 1,
      });
    } else {
      orderData[_orderIndex].quantity += quantity ? quantity : 1;
    }
    return orderData;
  } catch (err) {
    throw err;
  }
}
