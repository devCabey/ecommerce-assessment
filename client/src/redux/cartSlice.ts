import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { ICart } from '../types';

interface CartState {
  cart: ICart[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      if (state.cart.length > 0) {
        const existingIndex = state.cart.findIndex(
          (data) => data.product === action.payload.product
        );
        if (existingIndex < 0) {
          state.cart = [...state.cart, action.payload];
        } else {
          state.cart[existingIndex].quantity++;
        }
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const newCart = state.cart.filter(
        (data) => data.product !== action.payload.id
      );
      state.cart = [...newCart];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const currentCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
