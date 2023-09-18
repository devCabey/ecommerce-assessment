import React from 'react'
import { MdMinimize, MdOutlineAdd } from 'react-icons/md'

interface QuantityItemProps{
  quantity:number
}

const QuantityItem:React.FC<QuantityItemProps> =({quantity})=> {
  return (
    <div className=" flex justify-between items-center border rounded w-24 h-6 mt-2">
          <span className="w-1/3 h-full flex justify-center cursor-pointer "><MdMinimize size={15}/></span>
          <span className="w-1/3 h-full border-x text-sm flex justify-center items-center"> {quantity} </span>
          <span className="w-1/3 h-full flex justify-center items-center cursor-pointer"><MdOutlineAdd size={15}/></span>
    </div>
  )
}

export default QuantityItem
