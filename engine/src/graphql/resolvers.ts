import {
  createOrder,
  deleteOrder,
  getOrders,
  getProduct,
  getProducts,
} from '../services';

const resolvers = {
  Query: {
    getProduct: (_: any, { id }: any) => getProduct(id),
    getProducts: (_: any, { filter }: any) => getProducts(filter),
    getOrders: (_: any, { populate }: any) => getOrders(populate),
  },
  Mutation: {
    createOrder: (_: any, { input }: any) => createOrder(input),
    deleteOrder: (_: any, { id }: any) => deleteOrder(id),
  },
};

export default resolvers;
