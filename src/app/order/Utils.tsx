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

export const usePassengerQuantity = create((set): any => ({
  passengerData: null,
  setPassengerData: (newList: any) => set(() => ({ seat: newList })),
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

export const usePassengerStore = create((set) => ({
  quantity: 0,
  passengerData: [],
  setQuantity: (quantity) =>
    set((state) => {
      const updatedPassengerData = Array(quantity).fill({ value: "" });
      return { quantity, passengerData: updatedPassengerData };
    }),
  updatePassengerData: (value, index) =>
    set((state) => {
      const updatedPassengerData = [...state.passengerData];
      updatedPassengerData[index] = { value, index };
      return { passengerData: updatedPassengerData };
    }),
}));
