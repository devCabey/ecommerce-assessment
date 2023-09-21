import { gql } from '@apollo/client';

export const CREATEORDER = gql`
  mutation CreateOrder($input: [CreateOrderInput]!) {
    createOrder(input: $input) {
      product
      quantity
    }
  }
`;

export const DELETEORDER = gql`
  mutation DeleteOrder($id: String!) {
    deleteOrder(id: $id) {
      product
      quantity
    }
  }
`;
