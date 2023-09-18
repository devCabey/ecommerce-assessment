import React from 'react'

interface ProductShortcutProps {
  filter:string,
  photo:string,
}

const ProductShortcut: React.FC<ProductShortcutProps>=({filter,photo}) =>{
  return (
    <div className='w-64 h-16 shadow rounded-sm bg-gray-50 flex justify-between items-center px-5 m-5 cursor-pointer hover:border border-green-300'  >
        <img src={photo} className='h-12 w-16 rounded' alt={filter}/>
      <h3 className='text-xs font-medium font-sans'>{filter}</h3>
    </div>
  )
}

export default ProductShortcut
