import {
  createOrder,
  getOrders,
  getProduct,
  getProducts,
  updateOrder,
} from '../services';

const resolvers = {
  Query: {
    product: (_: any, { id }: any) => getProduct(id),
    products: (_: any, { filter }: any) => getProducts(filter),
    orders: () => getOrders(),
  },
  Mutation: {
    createOrder: (_: any, { input }: any) => createOrder(input),
    updateOrder: (_: any, { input }: any) => updateOrder(input),
  },
};

export default resolvers;
