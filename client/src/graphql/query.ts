import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query GetProducts($filter: String!) {
    getProducts(filter: $filter) {
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
    getProduct(id: $id) {
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
    getOrders(populate: $populate) {
      product
      quantity
    }
  }
`;
