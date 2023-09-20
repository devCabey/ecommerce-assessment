import React, {useState} from "react"

interface PaymentItemProps {
  Icon:any
  name:string
  active:string
  onClick:any
}

const PaymentItem: React.FC<PaymentItemProps>=({Icon,name,active,onClick}) =>{
  return (
    <div className={`flex flex-col justify-center items-center hover:border border-[#d1ba49] cursor-pointer w-20 p-1 hover:p-0 rounded-md ${active === name ?"border p-0":""}`} onClick={onClick}>
      <Icon size={30} color="#d1ba49" />
      <h6 className="text-xs  text-[#d1ba49]">{name}</h6>
    </div>
  )
}

export default PaymentItem
