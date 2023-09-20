import React,{useState} from 'react'
import ProductItem from '../components/productItem'
import ProductShortcut from '../components/productShortcut'
import { filters } from '../data'
import { useQuery } from '@apollo/client'
import { GET_ALL_PRODUCTS } from '../graphql/query'
import { IProduct } from '../types'


const ProductsView: React.FC=() =>{
  const [select,setSelect] = useState<string>("")

  const {loading, error, data} = useQuery(GET_ALL_PRODUCTS,{variables:{filter:select}})
  return (
    <div className='relative'>
      
     <div className='flex items-center justify-between px-10 bg-slate-100 sticky top-12 z-40'>
        <ProductShortcut filter="" photo="https://images.ctfassets.net/2yd1b0rk61ek/10Wn9tj66w3iyrdkyiO4FV/bc8ba2617988ed55d34857f47e0e4130/apple_herobanner_en.jpg" onClick={()=>setSelect("")} active={select}/>
        {filters.map((data)=><ProductShortcut key={data.filter}  filter={data.filter} photo={data.photo} onClick={()=>setSelect(data.filter)} active={select}/>)}
     
     </div>
     <h1 className='my-10 mx-10 text-xl font-bold '>"{select === ""? "All Product" :select}"</h1>
     {
      loading?<div className='w-11/12 h-64 flex justify-center items-center'>Loading ...</div>
      :error?<div>Error...</div>
      :data? <div className='grid grid-cols-4'>
                {
                  data.products?.map((prod:IProduct)=><ProductItem key={prod.name} name={prod.name} photo={prod.photo} id={prod.id} description={prod.description} price={prod.price}/>)
                }
              </div>
      :<div>Empty ...</div>
    }
    </div>
  )
}

export default ProductsView
