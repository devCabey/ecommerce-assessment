import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
type ProductLoader = (params: { id: string }) => Promise<any>;

interface ProductViewProps {
  loader: ProductLoader;
}

const ProductView: React.FC<ProductViewProps> = ({ loader }) => {
  const { id } = useParams<{ id: string }>();

  return (
  <>
    <div className='flex items-center justify-start m-5'>
      <Link to="/products" className='flex items-center justify-start text-xs cursor-pointer m-5 font-bold'>  {"<< Back To Products"}</Link>
    </div>
    <div className='w-full flex justify-between p-20 gap-10 '>
      <div className='w-1/2 flex justify-center items-center bg-gray-50'>
          <div className='w-5/6 '>
          <div className='w-full h-80 flex justify-center items-center'> 
            <img src='https://pngimg.com/uploads/iphone_13/iphone_13_PNG27.png' alt='product' className='w-72 h-80'/>
          </div>
          </div>
      </div>
      <div className='w-1/2 '>
        <div className=''>
          <h1 className='text-3xl font-medium'>IPhone 13 Pro</h1>
          <h6 className='text-xs text-gray-500 my-2'>256gig, Blue, 24MP Camera, 245Hz Battery Power.</h6>
        </div>
        <div className='border border-x-0 my-10 border-gray-100 h-14 flex justify-start items-center'>
          <h1 className='text-xl font-semibold'>$740.00</h1>
        </div>
        <div className='flex justify-center items-center'>
          <span className='px-4 py-2 border cursor-pointer rounded-full hover:border-green-300 hover:text-green-300 border-black'>Add to Cart</span>
        </div>
      </div>
    </div>
  </>
  );
};

export default ProductView;
