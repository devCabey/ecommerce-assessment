import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { IProduct } from '../types';

interface ProductState {
  product: IProduct[];
}

const initialState: ProductState = {
  product: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.product = action.payload;
    },
  },
});

export const { updateProduct } = productSlice.actions;

export const currentProducts = (state: RootState) => state.product.product;

export default productSlice.reducer;
