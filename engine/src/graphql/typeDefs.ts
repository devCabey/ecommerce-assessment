import { gql } from 'graphql-tag';

const typeDefs = gql`
  scalar GenericProduct

  type Product {
    id: String!
    name: String!
    price: Float!
    photo: String
    description: String
  }

  type Order {
    product: GenericProduct
    quantity: Int
  }

  input ProductInput {
    id: String
    name: String
    description: String
    photo: String
    price: Float
  }

  input CreateOrderInput {
    product: String!
    quantity: Int
  }

  input UpdateOrderInput {
    product: String!
    quantity: Int
  }

  type Query {
    product(id: String!): Product
    products(filter: String): [Product]!
    orders(populate: Boolean!): [Order]!
  }
  type Mutation {
    createOrder(input: CreateOrderInput!): [Order]!
    updateOrder(input: UpdateOrderInput!): [Order]!
  }
`;

export default typeDefs;
