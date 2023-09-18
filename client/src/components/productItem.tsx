import React from 'react'
import { Link } from 'react-router-dom'

interface ProductItemProps {
  id:string,
  name?:string,
  description?:string,
  photo?:string,
  price?:number
}

const ProductItem: React.FC<ProductItemProps>=({name,photo,id,description,price}) =>{
  return (
    <div className='w-60 m-5'>
      <Link  to={`/products/${id}`} className=' shadow shadow-gray-300 flex justify-center items-center bg-slate-100 rounded-lg w-full h-60 hover:border border-lime-800 '>
        <img src={photo} className='h-48 w-40 ' alt='product'/>
      </Link>
      <div className='px-2'>
        <div className='flex items-center justify-between text-sm mt-5 font-medium  font-sans'>
          <h3>{name}</h3>
          <h3>${price}</h3>
        </div>
        <p className='text-xs my-3 font-normal text-gray-600 w-full overflow-hidden whitespace-nowrap text-ellipsis'>{description}</p>
        <div className='flex justify-end items-center'>
          <span className='px-3 py-2 text-xs border border-green-500 rounded-full text-green-500 cursor-pointer hover:bg-green-500 hover:text-white'>Add to Cart</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem