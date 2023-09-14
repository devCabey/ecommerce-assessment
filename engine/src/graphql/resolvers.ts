import { getProduct, getProducts } from '../services';

const resolvers = {
  Query: {
    product: (_: any, { id }: any) => getProduct(id),
    products: (_: any, { filter }: any) => getProducts(filter),
  },
  Mutation: {},
};

export default resolvers;
