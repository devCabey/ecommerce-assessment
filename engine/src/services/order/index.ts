import { Order, OrderInput } from '../../types';

const orderData = [
  {
    id: '1',
    cart: [
      {
        product: {
          id: '3',
          name: 'shoe',
          description: 'double monk strap',
          photo: 'http://locaisifo',
          price: 10.2,
        },
        quantity: 5,
      },
      {
        product: {
          id: '2',
          name: 'watch',
          description: 'Classic Watch',
          photo: 'http://locaisifo',
          price: 10.2,
        },
        quantity: 2,
      },
    ],
    amount: 200,
  },
  {
    id: '2',
    cart: [
      {
        product: {
          id: '3',
          name: 'shoe',
          description: 'double monk strap',
          photo: 'http://locaisifo',
          price: 10.2,
        },
        quantity: 5,
      },
      {
        product: {
          id: '2',
          name: 'watch',
          description: 'Classic Watch',
          photo: 'http://locaisifo',
          price: 10.2,
        },
        quantity: 2,
      },
    ],
    amount: 200,
  },
];

export async function createOrder(input: OrderInput): Promise<Order[]> {
  try {
    const { orderId, cart, amount } = input;
    await orderData.push({ id: orderId, ...input });
    return orderData;
  } catch (err) {
    throw err;
  }
}

export async function updateOrder(input: OrderInput): Promise<Order[]> {
  try {
    const { orderId, cart, amount } = input;
    const orders = orderData.map((data) => {
      if (data.id == orderId) {
        return { ...data, cart: [...data.cart, ...cart], amount };
      } else {
        return data;
      }
    });

    return orders;
  } catch (err) {
    throw err;
  }
}
