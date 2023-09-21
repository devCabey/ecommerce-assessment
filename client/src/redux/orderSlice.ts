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
      const updatedOrders = state.orders.map((order) => {
        if (order.product === action.payload.product) {
          return { ...order, quantity: order.quantity + 1 }; // Create a new order object
        }
        return order;
      });

      state.orders = updatedOrders;
    },
    setOrder: (state, action: PayloadAction<IOrder[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrder, updateQuantity } = orderSlice.actions;

export const allOrders = (state: RootState) => state.order.orders;

export default orderSlice.reducer;
