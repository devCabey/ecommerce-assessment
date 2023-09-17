import React from 'react'
import PaymentItem from '../components/paymentItem'
import {FaAmazonPay,FaCcPaypal,FaCcVisa,FaCcMastercard} from 'react-icons/fa'
import InputItem from '../components/inputItem'
import OrderItem from '../components/orderItem'
interface CheckoutViewProps {
  
}

const CheckoutView: React.FC<CheckoutViewProps>=() =>{
  return (
    <div className='w-full flex justify-between px-10'>
     <div className='relative w-1/2 '>
      <h3 className='text-lg font-bold font-serif m-5'>Payment Details</h3>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-sm font-bold  px-3 py-1 shadow-md rounded text-[#d1ba49] '>Payment Method</h3>
        <div className='flex items-center justify-between gap-5 my-3 p-5 border-b rounded'>
          <PaymentItem Icon={FaAmazonPay} name='Amazon Pay'/>
          <PaymentItem  Icon={FaCcPaypal} name='Paypal' />
          <PaymentItem  Icon={FaCcVisa} name='Visa' />
          <PaymentItem  Icon={FaCcMastercard} name='Master Card'/>
        </div>
        {/* Account Detail */}
        <div className='w-full p-5'>
          <h3 className='text-sm font-serif font-bold mb-3 underline'>Account Details</h3>
          <InputItem type='text' placeholder='Please Enter Your Account Name' name='Account Name'/>
          <InputItem type='text' placeholder='Please Enter Account Number' name='Account Number'/>
          <div className='flex items-center justify-between gap-5'>
            <InputItem type='text' placeholder='Please Enter CCV' name='CCV' moreStyle=''/>
            <InputItem type='text' placeholder='09/24' name='Expire Date' moreStyle=''/>
          </div>
        </div>
        {/* Customer Details */}
        <div className='w-full p-5'>
          <h3 className='text-sm font-serif font-bold mb-3 underline'>Customer Details</h3>
          <InputItem type='text' placeholder='Please Enter Your Fullname' name='Fullname'/>
          <div className='flex items-center justify-between gap-5'>
            <InputItem type='text' placeholder='Please Enter Your Phone' name='Telephone' moreStyle=''/>
            <InputItem type='text' placeholder='Please Enter Your Email' name='Email' moreStyle=''/>
          </div>
          <InputItem type='text' placeholder='Please Enter Your Address' name='Address'/>
        </div>
        <div className='w-5/6 border h-10 my-10 flex justify-center items-center cursor-pointer shadow-md shadow-gray-500 rounded hover:bg-gray-200 '>
          <span className='text-sm font-bold text-[#d1ba49] '>Checkout</span>
        </div>
      </div>
     </div>
     <div className=' relative w-1/2  px-10'>
      <h3 className='text-lg font-bold font-serif m-5'>Order Details</h3>
      <div className='w-5/6 h-[650px] border-2  border-black overflow-scroll overflow-y-scroll flex flex-col justify-start items-center'>
        <div>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
          <OrderItem/>
        </div>
      </div>
      <div className='flex justify-between my-10 px-3'>
        <h3 className='text-lg font-bold font-serif'>Total </h3>
        <h3 className='text-lg font-medium font-mono'>$3000.00</h3>
      </div>
     </div>
    </div>
  )
}

export default CheckoutView
