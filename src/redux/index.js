import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import productsSlice from './products/productsSlice';
import productSlice from './products/productSlice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		products: productsSlice,
		productDetails: productSlice,
	},
});

export default store;
