import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Product {
    id: String!
    name: String!
    price: Float!
    phote: String
    description: String
  }

  type Order {
    product: Product
    quantity: Int
  }

  input CreateOrderInput {
    productId: String
    quantity: Int
  }


  input UpdateOrderInput {
    productId: String
    quantity: Int
  }

  type Query {
    product(id: String!): Product
    products(filter: String, search: String): [Product]!
    orders: [Order]!
  }
  type Mutation {
    createOrder(input: CreateOrderInput!): [Order]
    updateOrder(input: UpdateOrderInput!): [Order]
  }
`;

export default typeDefs;
