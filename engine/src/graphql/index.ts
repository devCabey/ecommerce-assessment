import { ApolloServer } from '@apollo/server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const graph = new ApolloServer({
  typeDefs,
  resolvers,
});

export default graph;
