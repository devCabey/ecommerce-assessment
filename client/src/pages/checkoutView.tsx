import React, { useEffect, useState } from 'react'
import PaymentItem from '../components/paymentItem'
import {FaAmazonPay,FaCcPaypal,FaCcVisa,FaCcMastercard} from 'react-icons/fa'
import InputItem from '../components/inputItem'
import OrderItem from '../components/orderItem'
import { Link } from 'react-router-dom'
import { IOrder, IProduct } from '../types'
import { GET_ORDERS } from '../graphql/query'
import { useQuery } from '@apollo/client'
import { getTotalAmount } from '../helpers'
import { setOrder } from '../redux/orderSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'


const CheckoutView: React.FC=() =>{
  const [orderTotal, setOrderTotal] = useState<number>(0)
  const [active, setActive] = useState<string>("")
  const [done,setDone] = useState<boolean>(false)
  const {loading, error, data} = useQuery(GET_ORDERS,{variables:{populate:true}})
  const orders = useAppSelector((state)=>state.order.orders)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    getTotalAmount(orders || []).then(data=>setOrderTotal(data))
    dispatch(setOrder(data?.orders))
 },[data,dispatch,orders,loading])



  return (
    <div className='relative w-full flex justify-between px-10'>
      <div className={`absolute top-0 bottom-0 right-0 left-0 z-40 bg-lime-900 opacity-90 ${done?"":"hidden"}`}></div>
      <Link  to='/products' className='absolute top-3 left-5 text-xs font-bold'>{" << Back to Products"}</Link>
     <div className='relative w-1/2 mt-10'>
      <h3 className='text-lg font-bold font-serif m-5'>Payment Details</h3>
      <form className='flex flex-col items-center justify-center'>
        <h3 className='text-sm font-bold  px-3 py-1 shadow-md rounded text-[#d1ba49] '>Payment Method</h3>
        <div className='flex items-center justify-between gap-5 my-3 p-5 border-b rounded'>
          <PaymentItem Icon={FaAmazonPay} name='Amazon Pay' active={active} onClick={()=>setActive("Amazon Pay")}/>
          <PaymentItem  Icon={FaCcPaypal} name='Paypal' active={active} onClick={()=>setActive("Paypal")} />
          <PaymentItem  Icon={FaCcVisa} name='Visa' active={active} onClick={()=>setActive("Visa")}/>
          <PaymentItem  Icon={FaCcMastercard} name='Master Card' active={active} onClick={()=>setActive("Master Card")}/>
        </div>
        {/* Account Detail */}
        <div className='w-full p-5'>
          <h3 className='text-sm font-serif font-bold mb-3 underline'>Account Details</h3>
          <InputItem type='text' placeholder='Please Enter Your Account Name' name='Account Name' />
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
        <div className='w-5/6 border h-10 my-10 flex justify-center items-center cursor-pointer shadow-md shadow-gray-500 rounded hover:bg-gray-200 '  onClick={()=>{setDone(true); setTimeout(()=>setDone(false),2000)}}>
          <span className='text-sm font-bold text-[#d1ba49]' >Checkout</span>
        </div>
      </form>
     </div>
     <div className=' relative w-1/2  px-10 mt-10'>
      <h3 className='text-lg font-bold font-serif m-5'>Order Details</h3>
      <div className='w-5/6 h-[650px] border-2  border-black overflow-scroll overflow-y-scroll flex flex-col justify-start items-center'>
      {
      loading?<div className='w-11/12 h-64 flex justify-center items-center'>Loading ...</div>
      :error?<div>Error...</div>
      :data? <div>
                {
                  orders?.map((prod:IOrder)=><OrderItem key={(prod.product as IProduct).name} id={(prod.product as IProduct).id} name={(prod.product as IProduct).name} quantity={prod.quantity} photo={(prod.product as IProduct).photo} price={(prod.product as IProduct).price}/>)
                }
              </div>
      :<div>Empty ...</div>
    }
      </div>
      <div className='flex justify-between my-10 px-3'>
        <h3 className='text-lg font-bold font-serif'>Total </h3>
        <h3 className='text-lg font-medium font-mono'>${orderTotal}</h3>
      </div>
     </div>
    </div>
  )
}

export default CheckoutView
