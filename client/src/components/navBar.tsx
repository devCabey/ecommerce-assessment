import React from 'react'
import {BsCartCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'


interface NavbarProps {

}

const Navbar: React.FC<NavbarProps>=() =>{
  return (
    <div className='w-full h-14 bg-white flex justify-between items-center px-20 gap-5'>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/003/092/544/small/e-commerce-logo-with-pointer-and-shopping-bag-free-vector.jpg'
          alt='logo' 
          className='h-14 cursor-pointer'
      />
      <div className='w-96 h-10 shadow-sm border border-gray-100 rounded-full flex items-center justify-between px-2'>
        <input type="text" placeholder='Search Product' className='flex items-center flex-1 h-full border-none outline-none px-3 rounded-full text-sm' />
        <BiSearchAlt size={19} color='gray'/>
      </div>
      <div className='flex items-center gap-1 cursor-pointer font-medium text-gray-900 '>
        <BsCartCheck size={15} />
        <span className='text-sm font-sans'>Cart</span>
      </div>
    </div>
  )
}


export default Navbar