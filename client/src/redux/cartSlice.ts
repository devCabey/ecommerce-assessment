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
        const existingCart = state.cart.find(
          (data) => data.product === action.payload.product
        );
        if (!existingCart) {
          state.cart = [...state.cart, action.payload];
        } else {
          const newCart = state.cart.map((data) => {
            if (data.product === existingCart.product) {
              return {
                ...data,
                quantity: data.quantity++,
              };
            }
            return data;
          });
          state.cart = [...newCart];
        }
      } else {
        state.cart = [...state.cart, action.payload];
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
