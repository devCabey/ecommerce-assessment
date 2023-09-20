import { gql } from '@apollo/client';

export const CREATEORDER = gql`
  mutation CreateOrder($input: {product:String!, quantity:Int}!) {
    createOrder(input: $input) {
      product
      quantity
    }
  }
`;

export const UPDATEORDER = gql`
  mutation UpdateOrder($input: {product:String!, quantity:Int}!) {
    updateOrder(input: $input) {
      product
      quantity
    }
  }
`;
