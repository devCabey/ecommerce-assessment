import React, { useEffect, useState } from 'react';
import ProductItem from '../components/productItem';
import ProductShortcut from '../components/productShortcut';
import { filters } from '../data';
import { IProduct } from '../types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { currentProducts, updateProduct } from '../redux/productSlice';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../graphql/query';

const ProductsView: React.FC = () => {
  const [select, setSelect] = useState<string>('All Products');
  const { data } = useQuery(GET_ALL_PRODUCTS, {
    variables: { filter: select },
  });

  const selectedProducts = useAppSelector(currentProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateProduct(data?.getProducts));
  }, [data, dispatch]);
  return (
    <div className='relative'>
      <div className='flex items-center justify-between px-10 bg-slate-100 sticky top-12 z-40'>
        {filters.map((data) => (
          <ProductShortcut
            key={data.filter}
            filter={data.filter}
            photo={data.photo}
            onClick={() => setSelect(data.filter)}
            active={select}
          />
        ))}
      </div>
      <h1 className='my-10 mx-10 text-xl font-bold '>
        "{select === '' ? 'All Product' : select}"
      </h1>

      <div className='grid grid-cols-4'>
        {selectedProducts?.map((prod: IProduct) => (
          <ProductItem
            key={prod.name}
            name={prod.name}
            photo={prod.photo}
            id={prod.id}
            description={prod.description}
            price={prod.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsView;
