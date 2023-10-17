import { create } from "zustand";

export const useTabsProfile = create((set) => ({
  position: 0,
  setPosition: (value) => set(() => ({ position: value })),
}));
