import React from 'react'
import ProductItem from '../components/productItem'
import ProductShortcut from '../components/productShortcut'
import { productsData } from '../data'


interface ProductsViewProps {
  
}

const ProductsView: React.FC<ProductsViewProps>=() =>{
  return (
    <div className='relative'>
      
     <div className='flex items-center justify-between px-10 bg-slate-100 sticky top-12 z-40'>
        <ProductShortcut/>
        <ProductShortcut/>
        <ProductShortcut/>
        <ProductShortcut/>
     </div>
     <h1 className='my-10 mx-10 text-xl font-bold '>"ALL PRODUCT"</h1>
     <div className='grid grid-cols-4'>
        {
          productsData.map((data)=><ProductItem key={data.id} name={data.name} photo={data.photo} id={data.id} description={data.description} price={data.price}/>)
        }
     </div>
    </div>
  )
}

export default ProductsView
