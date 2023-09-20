import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query GetProducts($filter: String!) {
    products(filter: $filter) {
      id
      name
      description
      price
      photo
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: String!) {
    product(id: $id) {
      id
      name
      description
      price
      photo
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrders($populate: Boolean!) {
    orders(populate: $populate) {
      product
      quantity
    }
  }
`;
