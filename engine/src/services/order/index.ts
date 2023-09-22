import { Order, OrderInput, Product } from '../../types';
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

export async function getOrders(populate: boolean): Promise<Order[]> {
  try {
    if (populate) {
      const populatedData = orderData.map((order) => {
        return {
          ...order,
          product: productData.find(
            (product) => order.product === product.id
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

export async function resetOrder(): Promise<Order[]> {
  try {
    orderData.splice(0);
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
