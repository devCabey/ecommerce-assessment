import React from 'react'
import ProductItem from '../components/productItem'

interface HomeViewProps {
  
}

const HomeView: React.FC<HomeViewProps>=() =>{
  return (
    <>
    <div className='w-full h-[500px] relative'>
    <img src='https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg' 
        className='w-full h-full  bg-cover'
        alt='landing'
    />
    <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40 h-full w-full flex items-center pl-20' >
        <h1 className='text-6xl text-green-100'>Shop Your <br/>Apple Products</h1>
    </div>
    </div>
    <div className='grid grid-cols-4 gap-5 m-auto w-11/12 mt-10'>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
    </div>
    </>
  )
}

export default HomeView
