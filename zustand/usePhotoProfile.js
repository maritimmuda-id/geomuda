import { create } from "zustand";

export const usePhotoProfile = create((set) => ({
  open: false,
  setAccount: () => set((state) => ({ open: !state.open })),
}));
