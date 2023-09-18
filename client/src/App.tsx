import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './pages/homeView';
import ProductsView from './pages/productsView';
import ProductView  from './pages/productView';
import CheckoutView from './pages/checkoutView';
import productLoader from './api/product';
import Layout from './layout/layout';



function App() {
  return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<HomeView/>} />
					<Route path= 'products' element={<ProductsView />}/>
					<Route path= 'products/:id' element={<ProductView  loader={productLoader}/>}/>
					<Route path= 'checkout' element={<CheckoutView />}/>
				</Routes>
			</Layout>
		</BrowserRouter>
  );
}

export default App;
