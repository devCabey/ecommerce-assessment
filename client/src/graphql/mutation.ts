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

export const DELETEORDER = gql`
  mutation DeleteOrder($id: String!) {
    deleteOrder(id: $id) {
      product
      quantity
    }
  }
`;

export const RESETORDER = gql`
  mutation ResetOrder {
    resetOrder {
      product
      quantity
    }
  }
`;
