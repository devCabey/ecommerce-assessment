import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeView from './pages/homeView';
import ProductsView from './pages/productsView';
import ProductView  from './pages/productView';
import CheckoutView from './pages/checkoutView';
import productLoader from './api/product';
import CartView from './pages/cartView';
import Layout from './layout/layout';



function App() {
  const router = createBrowserRouter([
    {
			path: '/',
			element: <HomeView/>,
		},
		{
			path: 'products',
			element: <ProductsView />,
		},
		{
			path: 'products/:id',
			element: <ProductView  loader={productLoader}/>,
		},
		{
			path: 'checkout',
			element: <CheckoutView />,
		},
		{
			path: 'cart',
			element: <CartView />,
		},
  ])
  return (
		<Layout>
  		<RouterProvider router={router}/>
			<div className='flex justify-center items-center'>&copy; 2023 </div>
		</Layout>
  
  );
}

export default App;
