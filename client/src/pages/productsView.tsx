import React,{useState} from 'react'
import ProductItem from '../components/productItem'
import ProductShortcut from '../components/productShortcut'
import { filters, productsData } from '../data'


interface ProductsViewProps {
  
}

const ProductsView: React.FC<ProductsViewProps>=() =>{
  const [select,setSelect] = useState<string>("All Products")
  return (
    <div className='relative'>
      
     <div className='flex items-center justify-between px-10 bg-slate-100 sticky top-12 z-40'>
        <ProductShortcut filter="All Products" photo="https://images.ctfassets.net/2yd1b0rk61ek/10Wn9tj66w3iyrdkyiO4FV/bc8ba2617988ed55d34857f47e0e4130/apple_herobanner_en.jpg" onClick={()=>setSelect("All Products")} active={select}/>
        {filters.map((data)=><ProductShortcut key={data.filter}  filter={data.filter} photo={data.photo} onClick={()=>setSelect(data.filter)} active={select}/>)}
     
     </div>
     <h1 className='my-10 mx-10 text-xl font-bold '>"{select}"</h1>
     <div className='grid grid-cols-4'>
        {
          productsData.map((data)=>{
            if(data.name.includes(select) || select==="All Products"){
             return <ProductItem key={data.name} name={data.name} photo={data.photo} id={data.id} description={data.description} price={data.price}/>
            }else{return ""}
          })
        }
     </div>
    </div>
  )
}

export default ProductsView
