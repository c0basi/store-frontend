import { createSlice } from '@reduxjs/toolkit';
import { getProductDetails } from './product-actions';

const productSlice = createSlice({
	name: 'products',
	initialState: { product: {}, loading: false, error: null },
	reducers: {
		reset(state) {
			state.product = {};
		},
	},
	extraReducers: {
		[getProductDetails.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[getProductDetails.pending]: (state, action) => {
			state.loading = true;
		},
		[getProductDetails.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.product = payload;
		},
	},
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
