import React from 'react';
import ProductItem from '../components/productItem';
import { TbSquareRoundedChevronsRight } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../graphql/query';
import { IProduct } from '../types';

const HomeView: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: { filter: 'All Products' },
  });
  return (
    <>
      <div className='w-full h-[500px] relative'>
        <img
          src='https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg'
          className='w-full h-full  bg-cover'
          alt='landing'
        />
        <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40 h-full w-full flex items-center pl-20'>
          <h1 className='text-6xl text-green-100'>
            Shop Your <br />
            Apple Products
          </h1>
        </div>
      </div>
      {loading ? (
        <div className='w-11/12 h-64 flex justify-center items-center'>
          Loading ...
        </div>
      ) : error ? (
        <div></div>
      ) : data ? (
        <div className='grid grid-cols-4 gap-5 m-auto w-11/12 mt-10'>
          {data.products?.map((prod: IProduct) => (
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
      ) : (
        ''
      )}

      <Link
        to='products'
        className='w-full flex justify-end items-center px-16 mt-10 mb-20'>
        <h3 className='px-3 py-2 border border-black cursor-pointer rounded-full text-sm hover:border-green-300 hover:text-green-300 flex items-center justify-center gap-1'>
          View All <TbSquareRoundedChevronsRight size={15} />{' '}
        </h3>
      </Link>
    </>
  );
};

export default HomeView;
