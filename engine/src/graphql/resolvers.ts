import {
  createOrder,
  deleteOrder,
  getOrders,
  getProduct,
  getProducts,
  resetOrder,
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
    resetOrder: (_: any, { input }: any) => resetOrder(),
    deleteOrder: (_: any, { id }: any) => deleteOrder(id),
  },
};

export default resolvers;
