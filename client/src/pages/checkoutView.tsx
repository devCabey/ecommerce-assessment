import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PaymentItem from '../components/paymentItem';
import {
  FaAmazonPay,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
} from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import InputItem from '../components/inputItem';
import OrderItem from '../components/orderItem';
import { Link } from 'react-router-dom';
import { IOrder, IProduct } from '../types';
import { GET_ORDERS } from '../graphql/query';
import { useMutation, useQuery } from '@apollo/client';
import { getTotalAmount } from '../helpers';
import { RESETORDER } from '../graphql/mutation';

const CheckoutView: React.FC = () => {
  const [orderTotal, setOrderTotal] = useState<number>(0);
  const [active, setActive] = useState<string>('');
  const [done, setDone] = useState<boolean>(false);

  const resetData = {
    accname: '',
    accnum: '',
    ccv: '',
    expireDate: '',
    fullname: '',
    telephone: '',
    email: '',
    address: '',
  };

  const { loading, error, data } = useQuery(GET_ORDERS, {
    variables: { populate: true },
  });

  const [resetOrder] = useMutation(RESETORDER, {
    refetchQueries: [{ query: GET_ORDERS }],
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getTotalAmount(data?.orders || []).then((data) => setOrderTotal(data));
  }, [data]);

  const onSubmit = async () => {
    if (active.length > 0) {
      setDone(true);
      setTimeout(() => setDone(false), 2000);
      reset(resetData);
      resetOrder();
    } else {
      setActive('error');
    }
  };

  return (
    <div className='relative w-full flex justify-between px-10'>
      <div
        className={`absolute top-0 bottom-0 right-0 left-0 z-40 bg-white opacity-90 ${
          done ? '' : 'hidden'
        } flex center items-center w-full h-full `}>
        <h3 className='text-2xl text-green-500 m-auto flex justify-center items-center gap-2'>
          {' '}
          <IoMdCheckmarkCircleOutline size={25} color='green' /> Order
          Successful
        </h3>
      </div>
      <Link to='/products' className='absolute top-3 left-5 text-xs font-bold'>
        {' << Back to Products'}
      </Link>
      <div className='relative w-1/2 mt-10'>
        <h3 className='text-lg font-bold font-serif m-5'>Payment Details</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-center justify-center'>
          <h3 className='text-sm font-bold  px-3 py-1 shadow-md rounded text-[#d1ba49] '>
            Payment Method
          </h3>
          {active === 'error' ? (
            <p className='text-sm text-red-500 mt-2 '>
              please select one payment method
            </p>
          ) : (
            ''
          )}
          <div className='flex items-center justify-between gap-5 my-3 p-5 border-b rounded'>
            <PaymentItem
              Icon={FaAmazonPay}
              name='Amazon Pay'
              active={active}
              onClick={() => setActive('Amazon Pay')}
            />
            <PaymentItem
              Icon={FaCcPaypal}
              name='Paypal'
              active={active}
              onClick={() => setActive('Paypal')}
            />
            <PaymentItem
              Icon={FaCcVisa}
              name='Visa'
              active={active}
              onClick={() => setActive('Visa')}
            />
            <PaymentItem
              Icon={FaCcMastercard}
              name='Master Card'
              active={active}
              onClick={() => setActive('Master Card')}
            />
          </div>
          {/* Account Detail */}
          <div className='w-full p-5'>
            <h3 className='text-sm font-serif font-bold mb-3 underline'>
              Account Details
            </h3>
            <InputItem
              type='text'
              placeholder='Please Enter Your Account Name'
              label='Account Name'
              name='accname'
              error={errors.accname}
              other={register('accname', {
                required: 'account name is required',
              })}
            />
            <InputItem
              type='text'
              placeholder='Please Enter Account Number'
              label='Account Number'
              name='accnum'
              error={errors.accnum}
              other={register('accnum', {
                required: 'account number is required',
              })}
            />
            <div className='flex items-center justify-between gap-5'>
              <InputItem
                type='text'
                placeholder='Please Enter CCV'
                name='ccv'
                label='CCV'
                moreStyle=''
                error={errors.ccv}
                other={register('ccv', { required: 'cvv is required' })}
              />
              <InputItem
                type='text'
                placeholder='09/24'
                label='Expire Date'
                name='expireDate'
                moreStyle=''
                error={errors.expireDate}
                other={register('expireDate', {
                  required: 'expire date is required',
                })}
              />
            </div>
          </div>
          {/* Customer Details */}
          <div className='w-full p-5'>
            <h3 className='text-sm font-serif font-bold mb-3 underline'>
              Customer Details
            </h3>
            <InputItem
              type='text'
              placeholder='Please Enter Your Fullname'
              label='Fullname'
              name='fullname'
              error={errors.fullname}
              other={register('fullname', {
                required: 'fullname is required',
              })}
            />
            <div className='flex items-center justify-between gap-5'>
              <InputItem
                type='text'
                placeholder='Please Enter Your Phone'
                label='Telephone'
                name='telephone'
                moreStyle=''
                error={errors.telephone}
                other={register('telephone', {
                  required: 'telephone is required',
                })}
              />
              <InputItem
                type='text'
                placeholder='Please Enter Your Email'
                label='Email'
                name='email'
                moreStyle=''
                error={errors.email}
                other={register('email', { required: 'email is required' })}
              />
            </div>
            <InputItem
              type='text'
              placeholder='Please Enter Your Address'
              label='Address'
              name='address'
              error={errors.address}
              other={register('address', {
                required: 'address name is required',
              })}
            />
          </div>
          {data?.orders.length > 0 ? (
            <button
              type='submit'
              className='w-5/6 border h-10 my-10 flex justify-center items-center cursor-pointer shadow-md shadow-gray-500 rounded hover:bg-gray-200 '>
              <span className='text-sm font-bold text-[#d1ba49]'>Checkout</span>
            </button>
          ) : (
            <div className='text-sm my-5 text-red-500'>NO ITEM TO CHECKOUT</div>
          )}
        </form>
      </div>
      <div className=' relative w-1/2  px-10 mt-10'>
        <h3 className='text-lg font-bold font-serif m-5'>Order Details</h3>
        <div className='w-5/6 h-[650px] border-2  border-black overflow-scroll overflow-y-scroll flex flex-col justify-start items-center'>
          {loading ? (
            <div className='w-11/12 h-64 flex justify-center items-center'>
              Loading ...
            </div>
          ) : error ? (
            <div>Error...</div>
          ) : data ? (
            <div>
              {data?.orders?.map((prod: IOrder) => (
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
          ) : (
            <div>Empty ...</div>
          )}
        </div>
        <div className='flex justify-between my-10 px-3'>
          <h3 className='text-lg font-bold font-serif'>Total </h3>
          <h3 className='text-lg font-medium font-mono'>${orderTotal}</h3>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
