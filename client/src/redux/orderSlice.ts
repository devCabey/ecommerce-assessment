import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { IOrder } from '../types';

interface OrderState {
  orders: IOrder[];
}

const initialState: OrderState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateQuantity: (state, action: PayloadAction<IOrder>) => {
      const cartItem = state.orders.findIndex(
        (data) => data.product === action.payload.product
      );
      console.log(state.orders);
      if (cartItem >= 0) {
        state.orders[cartItem].quantity++;
      } else {
        state.orders.push({
          product: action.payload.product,
          quantity: 1,
        });
      }
    },
    setOrder: (state, action: PayloadAction<IOrder[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrder, updateQuantity } = orderSlice.actions;

export const allOrders = (state: RootState) => state.order.orders;

export default orderSlice.reducer;
