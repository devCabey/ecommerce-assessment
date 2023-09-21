import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import { BsCartCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { IoMdCloseCircle } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ICart, IProduct } from '../types';
import { getTotalAmount, getTotalCartItems, populateOrder } from '../helpers';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../graphql/query';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { currentCart } from '../redux/cartSlice';
import SearchItem from './searchItem';
import { currentProducts } from '../redux/productSlice';
import OrderItem from './orderItem';
import { CREATEORDER } from '../graphql/mutation';

const Navbar: React.FC = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [orderItems, setOrderItems] = useState<number>(0);
  const [orderTotal, setOrderTotal] = useState<number>(0);
  const [populatedData, setPopulatedData] = useState<ICart[]>([]);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [search, setSearch] = useState<IProduct[]>([]);

  const [getProducts, { data: searchData }] = useLazyQuery(GET_ALL_PRODUCTS, {
    variables: { filter: searchText },
  });

  const selectedProducts = useAppSelector(currentProducts);
  const orders = useAppSelector(currentCart);
  const dispatch = useAppDispatch();

  const [createOrder] = useMutation(CREATEORDER, {
    variables: { input: orders },
  });

  const handleCheckout = () => {
    createOrder();
    setOpenCart(true);
  };

  useEffect(() => {
    populateOrder(orders, selectedProducts).then((data) =>
      setPopulatedData(data)
    );
    getTotalCartItems(populatedData).then((data) =>
      setOrderItems(data)
    );
    getTotalAmount(populatedData).then((data) =>
      setOrderTotal(data)
    );
    setSearch(searchData?.getProducts);
  }, [dispatch, orders, searchData]);

  const deBounceSearch = () => {
    const debouncer = _.debounce(() => {
      getProducts();
    }, 500);
    debouncer();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    deBounceSearch();
  };
  return (
    <div className='w-full h-14 bg-white flex justify-between items-center px-20 gap-5 sticky top-0 z-50'>
      <Link to='/'>
        <img
          src='https://static.vecteezy.com/system/resources/thumbnails/003/092/544/small/e-commerce-logo-with-pointer-and-shopping-bag-free-vector.jpg'
          alt='logo'
          className='h-14 cursor-pointer'
        />
      </Link>

      <div className='relative w-96 h-10 shadow-sm border border-gray-100 rounded-full flex items-center justify-between px-2'>
        <input
          type='text'
          placeholder='Search Product'
          onChange={(e) => handleOnChange(e)}
          onClick={() => setOpenSearch(true)}
          className='flex items-center flex-1 h-full border-none outline-none px-3 rounded-full text-sm'
        />
        <BiSearchAlt size={19} color='gray' />
        <div
          className={`absolute top-12 w-96 max-h-96 bg-white z-40 border py-10 px-2   flex-col items-center overflow-scroll overflow-y-scroll ${
            openSearch ? 'flex' : 'hidden'
          }`}>
          <span
            className='absolute top-2 right-2 cursor-pointer'
            onClick={() => setOpenSearch(false)}>
            <IoMdCloseCircle size={20} />
          </span>
          {search?.length === 0
            ? 'Empty ...'
            : search?.map((data) => (
                <SearchItem
                  id={data.id}
                  name={data.name as string}
                  photo={data.photo as string}
                  key={data.name as string}
                  onClick={() => setOpenSearch(false)}
                />
              ))}
        </div>
      </div>
      <div
        className=' relative flex items-center gap-2 cursor-pointer font-medium text-gray-900 '
        onClick={() => setOpenCart(true)}>
        <BsCartCheck size={20} />
        <span className='text-sm font-sans'>Cart</span>
        <span className='border-2 rounded-full h-5 w-5 text-xs border-green-700 text-green-700 flex justify-center items-center absolute -top-2 -right-6 font-bold'>
          {orderItems}
        </span>
      </div>
      <div
        className={`absolute  top-16 ${
          openCart ? 'right-0' : '-right-[500px] hidden'
        } w-96 h-[850px] border  bg-white shadow-md  transition-all ease-in-out p-5 overflow-hidden`}>
        <div
          className='absolute top-5 left-5 border cursor-pointer'
          onClick={() => setOpenCart(false)}>
          <MdClose size={20} />
        </div>

        <div className=' h-[650px] overflow-scroll overflow-y-scroll mt-10 flex flex-col items-center'>
          {populatedData?.map((prod: ICart) => (
            <OrderItem
              key={(prod.product as IProduct).name}
              id={(prod.product as IProduct).id}
              name={(prod.product as IProduct).name}
              quantity={prod.quantity}
              photo={(prod.product as IProduct).photo}
              price={(prod.product as IProduct).price}
            />
          ))}
        </div>

        <div className='h-[150px] border shadow-md rounded-t-md p-5'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-bold'>Total</h3>
            <h3 className='text-lg font-mono'>${orderTotal}.00</h3>
          </div>
          <span onClick={() => handleCheckout()}>
            <Link
              to='/checkout'
              className='h-10 border flex justify-center items-center cursor-pointer text-sm font-medium bg-lime-800 text-white rounded-xl mt-5'>
              Checkout
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
