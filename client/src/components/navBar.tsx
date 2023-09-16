import React,{ReactNode} from 'react'


interface NavbarProps {
  children: ReactNode;
}

const Navbar: React.FC<NavbarProps>=({children}) =>{
  return (
  <>
  <div className='w-screen h-10 bg-green-800'></div>
  {children}
  </>
  )
}


export default Navbar