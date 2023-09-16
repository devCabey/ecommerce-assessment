import React from 'react'
import { useParams } from 'react-router-dom';

type ProductLoader = (params: { id: string }) => Promise<any>;

interface ProductViewProps {
  loader: ProductLoader;
}

const ProductView: React.FC<ProductViewProps> = ({ loader }) => {
  const { id } = useParams<{ id: string }>();


  return (
  <div>Product {id}</div>
  );
};

export default ProductView;
