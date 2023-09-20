import { create } from 'zustand';
import { IOrder } from '../types';

interface IOrderState {
  orders: IOrder[];
  setOrders: (orders: IOrder[]) => void;
}

const useOrderStore = create<IOrderState>((set) => ({
  orders: [],
  setOrders: (orders) =>
    set((state) => ({
      ...state,
      orders,
    })),
}));

export default useOrderStore;
