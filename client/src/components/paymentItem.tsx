import React from "react"

interface PaymentItemProps {
  Icon:any
  name:string
}

const PaymentItem: React.FC<PaymentItemProps>=({Icon,name}) =>{
  return (
    <div className="flex flex-col justify-center items-center hover:border border-[#d1ba49] cursor-pointer w-20 p-1 hover:p-0 rounded-md">
      <Icon size={30} color="#d1ba49" />
      <h6 className="text-xs  text-[#d1ba49]">{name}</h6>
    </div>
  )
}

export default PaymentItem
