import React, { useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import QuantityItem from './quantityItem';
import { useMutation } from '@apollo/client';
import { DELETEORDER } from '../graphql/mutation';
import { GET_ORDERS } from '../graphql/query';
import { useAppDispatch } from '../redux/hooks';
import { setOrders } from '../redux/orderSlice';

interface OrderItemProps {
  photo?: string;
  name?: string;
  price?: number;
  quantity?: number;
  id: string;
}

const OrderItem: React.FC<OrderItemProps> = ({
  id,
  photo,
  name,
  price,
  quantity,
}) => {
  const [deleteOrder, { data }] = useMutation(DELETEORDER, {
    variables: { id: id },
    refetchQueries: [{ query: GET_ORDERS, variables: { populate: true } }],
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.deleteOrder) dispatch(setOrders(data?.deleteOrder));
  }, [dispatch, data]);

  async function handleRemoveItem() {
    await deleteOrder();
  }
  return (
    <div className='w-80 h-24 border border-gray-300 my-5 flex items-center relative rounded-md px-1'>
      <div
        className='absolute top-3 right-3 cursor-pointer'
        onClick={() => handleRemoveItem()}>
        <MdOutlineClose size={18} />
      </div>
      <img src={photo} alt='product' className='w-20 h-20' />
      <div className='flex-1 px-5 flex flex-col '>
        <div className='flex w-full'>
          <h2 className='text-sm font-medium'>{name}</h2>
        </div>
        <div className='h-5 flex justify-between'>
          <QuantityItem quantity={quantity as number} />
          <h3 className='text-sm font-medium text-gray-500 mt-2'>
            ${price}.00
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
