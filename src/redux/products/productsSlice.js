import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './product-actions';

const productsSlice = createSlice({
	name: 'products',
	initialState: { products: [], loading: false, error: null },
	reducers: {},
	extraReducers: {
		[getProducts.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[getProducts.pending]: (state, action) => {
			state.loading = true;
		},
		[getProducts.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.products = payload;
		},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
