import React,{ReactNode} from 'react'
import Navbar from '../components/navBar';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps>=({children}) =>{
  return (
  <div className='w-screen bg-slate-100'>
    <Navbar/>
    <div className='w-3/4 m-auto mt-5 bg-white h-screen'>
    {children}
    </div>
  </div>
  )
}


export default Layout