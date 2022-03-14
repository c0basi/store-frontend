import './App.scss';

import AppRouter from './routes/AppRouter';

function App() {
	return (
		<AppRouter />

		// <Layout>
		// 	<Routes>
		// 		<Route path="cart" element={<CartPage />} />
		// 		<Route path="/" element={<CartPage />} />
		// 		<Route path="product/:id" element={<ProductPage />} />
		// 	</Routes>
		// </Layout>
	);
}

export default App;
