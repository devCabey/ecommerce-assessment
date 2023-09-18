import React,{useState,useEffect} from 'react'
import {BsCartCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import OrderItem from './orderItem'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IOrder } from '../types'
import { populateOrder } from '../helpers'
import { orderData, productsData } from '../data'


interface NavbarProps {

}

const Navbar: React.FC<NavbarProps>=() =>{

  const [openCart, setOpenCart]= useState<boolean>(false)
  const [orders, setOrders] = useState<IOrder[]>([])

  useEffect(()=>{
     populateOrder(orderData,productsData).then((data)=>setOrders(data))
  },[orders])
  
  return (
    <div className='w-full h-14 bg-white flex justify-between items-center px-20 gap-5 sticky top-0 z-50'>
      <Link to='/' >
        <img src='https://static.vecteezy.com/system/resources/thumbnails/003/092/544/small/e-commerce-logo-with-pointer-and-shopping-bag-free-vector.jpg'
            alt='logo' 
            className='h-14 cursor-pointer'
        />
      </Link>
    
      <div className='w-96 h-10 shadow-sm border border-gray-100 rounded-full flex items-center justify-between px-2'>
        <input type="text" placeholder='Search Product' className='flex items-center flex-1 h-full border-none outline-none px-3 rounded-full text-sm' />
        <BiSearchAlt size={19} color='gray'/>
      </div >
      <div className=' relative flex items-center gap-2 cursor-pointer font-medium text-gray-900 ' onClick={()=>setOpenCart(true)}>
        <BsCartCheck size={20} />
        <span className='text-sm font-sans'>Cart</span>
        <span className='border-2 rounded-full h-5 w-5 text-xs border-green-700 text-green-700 flex justify-center items-center absolute -top-2 -right-6 font-bold'> 18 </span>
      </div>
      <div className={`absolute  top-16 ${ openCart? "right-0":"-right-[500px] hidden"} w-96 h-[850px] border  bg-white shadow-md  transition-all ease-in-out p-5 overflow-hidden`}>
        <div className='absolute top-5 left-5 border cursor-pointer' onClick={()=>setOpenCart(false)}>
          <MdClose size={20}/>
        </div>
        <div className=' h-[650px] overflow-scroll overflow-y-scroll mt-10 flex flex-col items-center'>
         {
          orders.map((data)=> <OrderItem name={data?.product?.name} quantity={data.quantity} photo={data?.product?.photo} price={data?.product?.price}/>)
         }
         
        </div>
        <div className='h-[150px] border shadow-md rounded-t-md p-5'>
            <div className='flex items-center justify-between'>
              <h3 className='text-xl font-bold'>Total</h3>
              <h3 className='text-lg font-mono'>$3000.00</h3>
            </div>
            <span onClick={()=>setOpenCart(false)}><Link  to="/checkout" className='h-10 border flex justify-center items-center cursor-pointer text-sm font-medium bg-lime-800 text-white rounded-xl mt-5' >Checkout</Link></span>
        </div>
      </div>
    </div>
  )
}


export default Navbar