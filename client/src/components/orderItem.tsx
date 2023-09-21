import React from "react"
import {MdOutlineClose} from 'react-icons/md'
import QuantityItem from "./quantityItem";
import { useMutation } from "@apollo/client";
import { DELETEORDER } from "../graphql/mutation";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setOrder } from "../redux/orderSlice";

interface OrderItemProps {
  photo?:string
  name?:string
  price?:number;
  quantity?:number
  id:string
}

const OrderItem: React.FC<OrderItemProps>=({id,photo,name,price,quantity}) =>{
  const [deleteOrder,{data}] = useMutation(DELETEORDER,{variables:{id:id}})
  const dispatch = useAppDispatch()

 async function handleRemoveItem(){
    await deleteOrder();
    dispatch(setOrder(data?.orders))
  }
  return (
    <div className="w-80 h-24 border border-gray-300 my-5 flex items-center relative rounded-md px-1">
      <div className="absolute top-3 right-3 cursor-pointer" onClick={()=>handleRemoveItem()}><MdOutlineClose size={18}/></div>
      <img src={photo} alt="product" className="w-20 h-20" />
      <div className="flex-1 px-5 flex flex-col ">
        <div className="flex w-full">
          <h2 className="text-sm font-medium">{name}</h2>  
        </div>
        <div className="h-5 flex justify-between">
          <QuantityItem quantity={quantity as number}/>
          <h3 className="text-sm font-medium text-gray-500 mt-2">${price}.00</h3>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
