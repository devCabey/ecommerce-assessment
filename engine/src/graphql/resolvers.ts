import { getProduct, getProducts } from '../services';

const resolvers = {
  Query: {
    product: (_: any, { id }: any) => getProduct(id),
    products: () => getProducts(),
  },
  Mutation: {},
};

export default resolvers;
