import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Product {
    id: String!
    name: String!
    price: Float!
    phote: String
    description: String
  }

  type OrderItem {
    product: Product
    quantity: Int
  }

  type Order {
    cart: [OrderItem]!
    amount: Float
  }

  input OrderItemInput {
    productId: String
    quantity: Int
  }

  input CreateOrderInput {
    cart: [OrderItemInput]!
    amout: Float
  }

  input UpdateOrderInput {
    productId: String
    quantity: Int
  }

  type Query {
    product(id: String!): Product
    products(filter: String): [Product]!
    orders: [Order]!
  }
  type Mutation {
    createOrder(input: CreateOrderInput!): Order
    updateOrder(input: UpdateOrderInput!): Order
  }
`;

export default typeDefs;
