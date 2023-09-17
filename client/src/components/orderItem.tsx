import React from "react"
import {MdOutlineClose, MdOutlineAdd, MdMinimize} from 'react-icons/md'

interface OrderItemProps {
  
}

const OrderItem: React.FC<OrderItemProps>=() =>{
  return (
    <div className="w-96 h-24 border border-gray-300 my-5 flex items-center relative rounded-md">
      <div className="absolute top-3 right-3 cursor-pointer"><MdOutlineClose size={18}/></div>
      <img src="https://pngimg.com/uploads/iphone_13/iphone_13_PNG27.png" alt="product" className="w-20 h-20" />
      <div className="flex-1 px-5 flex flex-col ">
        <div className="flex w-full">
          <h2 className="text-sm font-medium">Iphone 13 Pro</h2>  
        </div>
        <div className="h-5 flex justify-between">
          <span className=" flex justify-between items-center border rounded w-24 h-6 mt-2">
            <span className="w-1/3 h-full flex justify-center cursor-pointer "><MdMinimize size={15}/></span>
            <span className="w-1/3 h-full border-x text-sm flex justify-center items-center"> 1 </span>
            <span className="w-1/3 h-full flex justify-center items-center cursor-pointer"><MdOutlineAdd size={15}/></span>
          </span>
          <h3 className="text-sm font-medium text-gray-500 mt-2">$25.00</h3>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
