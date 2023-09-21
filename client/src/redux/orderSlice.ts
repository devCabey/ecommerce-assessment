import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { IOrder } from '../types';

// Define a type for the slice state
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
    setOrder: (state, action: PayloadAction<IOrder[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrder } = orderSlice.actions;

export const allOrders = (state: RootState) => state.orderSlice.orders;

export default orderSlice.reducer;
