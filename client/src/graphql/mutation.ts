import { gql } from '@apollo/client';

export const CREATEORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      product
      quantity
    }
  }
`;

export const UPDATEORDER = gql`
  mutation UpdateOrder($input: UpdateOrderInput!) {
    updateOrder(input: $input) {
      product
      quantity
    }
  }
`;
