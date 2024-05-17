import axios from "axios";
import { create } from "zustand";

export const useRegion = create((set) => ({
  region: null,
  setRegion: (newList: any) => set(() => ({ region: newList })),
}));

export const useFlight = create((set) => ({
  flight: null,
  setFlight: (newList: any) => set(() => ({ flight: newList })),
}));

export const useSeat = create((set) => ({
  seat: null,
  setSeat: (newList: any) => set(() => ({ seat: newList })),
}));

export const usePassengerQuantity = create((set) => ({
  passenger: null,
  setPassenger: (newList: any) => set(() => ({ seat: newList })),
}));

export const useCartData = create((set) => ({
  cartData: null,
  setCartData: (newList: any) => set(() => ({ cardData: newList })),
  fetchCartData: (userId: string) => {
    axios.get(`/api/cardData?userId=${userId}`).then(({ data }) => {
      set(() => ({ cartData: data }));
    });
  },
}));

export const useOrder = create((set) => ({
  order: [],
  setOrder: (newList: any) => set(() => ({ seat: newList })),
  fetchOrders: () => {
    axios.get(`api/order`).then(({ data }) => {
      set(() => ({ order: data }));
    });
  },
}));
