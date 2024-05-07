import { create } from "zustand";

export const useRegion = create((set) => ({
  region: null,
  setRegion: (newList: any) => set(() => ({ region: newList })),
}));

export const useFlight = create((set) => ({
  flight: null,
  setFlight: (newList: any) => set(() => ({ flight: newList })),
}));

export const useCardData = create((set) => ({
  cardData: null,
  setCardData: (newList: any) => set(() => ({ cardData: newList })),
}));
