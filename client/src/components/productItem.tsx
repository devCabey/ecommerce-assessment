import React from 'react'

interface ProductItemProps {
  
}

const ProductItem: React.FC<ProductItemProps>=() =>{
  return (
    <div className='w-60'>
      <div className=' shadow shadow-gray-300 flex justify-center bg-slate-100 rounded-lg w-full h-60 '>
        <img src='https://pngimg.com/uploads/iphone_13/iphone_13_PNG27.png' className='h-48 w-40' alt='product'/>
      </div>
      <div px-2>
        <div className='flex items-center justify-between text-sm mt-5 font-medium  font-sans'>
          <h3>IPhone 13 pro</h3>
          <h3>$700</h3>
        </div>
        <p className='text-xs my-2 font-normal'>Iphone 13 pro, 256gig, Green</p>
        <div className='flex justify-end items-center'>
          <span className='px-2 py-2 text-xs border border-green-500 rounded-full text-green-500 cursor-pointer hover:bg-green-500 hover:text-white'>Add to Cart</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
