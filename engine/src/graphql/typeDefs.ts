import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Product {
    id: String!
    name: String!
    price: Float!
    photo: String
    description: String
  }

  type OrderItem {
    product: Product
    quantity: Int
  }

  type Order {
    id: String
    cart: [OrderItem]
    amount: Float
  }

  input ProductInput {
    id: String
    name: String
    description: String
    photo: String
    price: Float
  }

  input OrderItemInput {
    product: ProductInput
    quantity: Int
  }

  input CreateOrderInput {
    orderId: String
    cart: [OrderItemInput]!
    amount: Float
  }

  input UpdateOrderInput {
    orderId: String!
    cart: [OrderItemInput]
    amount: Float
  }

  type Query {
    product(id: String!): Product
    products(filter: String): [Product]!
    orders: [Order]!
  }
  type Mutation {
    createOrder(input: CreateOrderInput!): [Order]!
    updateOrder(input: UpdateOrderInput!): [Order]!
  }
`;

export default typeDefs;
