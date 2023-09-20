import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';

import HomeView from './pages/homeView';
import ProductsView from './pages/productsView';
import ProductView  from './pages/productView';
import CheckoutView from './pages/checkoutView';
import productLoader from './api/product';
import Layout from './layout/layout';

const client = new ApolloClient({
	uri:'http://localhost:5000/graphql',
	cache: new InMemoryCache()
})

function App() {
  return (
		<ApolloProvider client={client}>
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
		</ApolloProvider>
		
  );
}

export default App;
