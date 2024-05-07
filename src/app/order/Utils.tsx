import { create } from "zustand";

export const useRegion = create((set) => ({
  region: null,
  setRegion: (newList: any) => set(() => ({ region: newList })),
}));

export const useFlight = create((set) => ({
  flight: null,
  setFlight: (newList: any) => set(() => ({ flight: newList })),
}));

// export const useNameOnCard = create((set) => ({
//   nameOnCard: null,
//   setNameOnCard: (newList: any) => set(() => ({ flight: newList })),
// }));

// export const useCvc = create((set) => ({
//   cvc: null,
//   setCvc: (newList: any) => set(() => ({ flight: newList })),
// }));
// export const useDate = create((set) => ({
//   date: null,
//   setDate: (newList: any) => set(() => ({ flight: newList })),
// }));
// export const useCardNumber = create((set) => ({
//   cardNumber: null,
//   setCardNumber: (newList: any) => set(() => ({ flight: newList })),
// }));
