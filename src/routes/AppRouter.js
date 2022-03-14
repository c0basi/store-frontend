import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

//pages
import HomePage from '../components/pages/HomePage';
import CartPage from '../components/pages/CartPage';
import ProductPage from '../components/pages/ProductPage';

const AppRouter = () => {
	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/product/:id" component={ProductPage} />
				<Route exact path="/cart" component={CartPage} />
			</Switch>
		</Layout>
	);
};

export default AppRouter;
