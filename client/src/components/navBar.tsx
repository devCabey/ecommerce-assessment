import React,{useState} from 'react'
import {BsCartCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import OrderItem from './orderItem'
import { MdClose } from 'react-icons/md'


interface NavbarProps {

}

const Navbar: React.FC<NavbarProps>=() =>{

  const [openCart, setOpenCart]= useState<boolean>(false)
  return (
    <div className='w-full h-14 bg-white flex justify-between items-center px-20 gap-5 sticky top-0 z-50'>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/003/092/544/small/e-commerce-logo-with-pointer-and-shopping-bag-free-vector.jpg'
          alt='logo' 
          className='h-14 cursor-pointer'
      />
      <div className='w-96 h-10 shadow-sm border border-gray-100 rounded-full flex items-center justify-between px-2'>
        <input type="text" placeholder='Search Product' className='flex items-center flex-1 h-full border-none outline-none px-3 rounded-full text-sm' />
        <BiSearchAlt size={19} color='gray'/>
      </div >
      <div className='flex items-center gap-2 cursor-pointer font-medium text-gray-900 ' onClick={()=>setOpenCart(true)}>
        <BsCartCheck size={20} />
        <span className='text-sm font-sans'>Cart</span>
      </div>
      <div className={`absolute  top-16 ${ openCart? "right-0":"-right-96"} w-96 h-[850px] border  bg-white shadow-md  transition-all ease-in-out p-5 overflow-hidden`}>
        <div className='absolute top-5 left-5 border cursor-pointer' onClick={()=>setOpenCart(false)}>
          <MdClose size={20}/>
        </div>
        <div className=' h-[700px] overflow-scroll overflow-y-scroll mt-10 flex flex-col items-center'>
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
          <OrderItem/>
          <OrderItem/>
        </div>
        <div className='h-[80px] border shadow-md rounded-t-md p-5'>
            <div className='flex items-center justify-between'>
              <h3 className='text-xl font-bold'>Total</h3>
              <h3 className='text-lg font-mono'>$3000.00</h3>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar