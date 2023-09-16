import React from 'react'

interface ProductShortcutProps {
  
}

const ProductShortcut: React.FC<ProductShortcutProps>=() =>{
  return (
    <div className='w-64 h-16 shadow rounded-sm bg-gray-50 flex justify-between items-center px-5 m-5 cursor-pointer hover:border border-green-300'  >
        <img src='https://pngimg.com/d/macbook_PNG52.png' className='h-12 w-16 rounded'/>
      <h3 className='text-xs font-medium font-sans'>Macbook</h3>
    </div>
  )
}

export default ProductShortcut
