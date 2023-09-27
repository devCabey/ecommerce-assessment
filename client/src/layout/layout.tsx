import React, { ReactNode, useEffect } from 'react';
import Navbar from '../components/navBar';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/query';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setOrders } from '../redux/orderSlice';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.order.value);

  const { data } = useQuery(GET_ORDERS, {
    variables: { populate: true },
  });

  useEffect(() => {
    console.log(data);
    dispatch(setOrders(data?.orders));
  }, [dispatch, data]);
  return (
    <div className='w-screen bg-slate-100'>
      <Navbar orders={orders || []} />
      <div className='w-3/4 m-auto mt-5 bg-white'>{children}</div>
    </div>
  );
};

export default Layout;
