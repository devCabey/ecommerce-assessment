import { createOrder, getProduct, getProducts, updateOrder } from '../services';
import { OrderInput } from '../types';

const resolvers = {
  Query: {
    product: (_: any, { id }: any) => getProduct(id),
    products: (_: any, { filter }: any) => getProducts(filter),
  },
  Mutation: {
    createOrder: (_: any, { input }: any) => createOrder(input),
    updateOrder: (_: any, { input }: any) => updateOrder(input),
  },
};

export default resolvers;
