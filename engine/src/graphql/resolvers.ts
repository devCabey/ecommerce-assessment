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
    orders: (_: any, { populate }: any) => getOrders(populate),
  },
  Mutation: {
    createOrder: (_: any, { input }: any) => createOrder(input),
    updateOrder: (_: any, { input }: any) => updateOrder(input),
    deleteOrder: (_: any, { id }: any) => updateOrder(id),
  },
};

export default resolvers;
