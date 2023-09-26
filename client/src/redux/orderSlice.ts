import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { IOrder } from '../types';

interface OrderState {
  value: IOrder[];
}

const initialState: OrderState = {
  value: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<IOrder[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setOrders } = orderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.order.value;

export default orderSlice.reducer;
