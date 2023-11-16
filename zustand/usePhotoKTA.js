import { create } from "zustand";

export const usePhotoKTA = create((set) => ({
  kta: false,
  setKta: () => set((state) => ({ kta: !state.kta })),
}));
