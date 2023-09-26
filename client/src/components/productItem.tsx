import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATEORDER } from '../graphql/mutation';
import { GET_ORDERS } from '../graphql/query';
import { useAppDispatch } from '../redux/hooks';
import { setOrders } from '../redux/orderSlice';

interface ProductItemProps {
  id: string;
  name?: string;
  description?: string;
  photo?: string;
  price?: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  photo,
  id,
  description,
  price,
}) => {
  // will use the data to update order in context
  const [updateOrder, { data }] = useMutation(UPDATEORDER, {
    variables: { input: { product: id, quantity: 1 } },
    refetchQueries: [{ query: GET_ORDERS, variables: { populate: true } }],
  });

  const dispatch = useAppDispatch();
  console.log(data);
  useEffect(() => {
    if (data?.updateOrder) dispatch(setOrders(data?.updateOrder));
  }, [dispatch, data]);
  return (
    <div className='w-60 m-5'>
      <Link
        to={`/products/${id}`}
        className=' shadow shadow-gray-300 flex justify-center items-center bg-slate-100 rounded-lg w-full h-60 hover:border border-lime-800 '>
        <img src={photo} className='h-48 w-40 ' alt='product' />
      </Link>
      <div className='px-2'>
        <div className='flex items-center justify-between text-sm mt-5 font-medium  font-sans'>
          <h3>{name}</h3>
          <h3>${price}</h3>
        </div>
        <p className='text-xs my-3 font-normal text-gray-600 w-full overflow-hidden whitespace-nowrap text-ellipsis'>
          {description}
        </p>
        <div className='flex justify-end items-center'>
          <span
            className='px-3 py-2 text-xs border border-green-500 rounded-full text-green-500 cursor-pointer hover:bg-green-500 hover:text-white'
            onClick={() => updateOrder()}>
            Add to Cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
