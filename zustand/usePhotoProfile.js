import { create } from "zustand";

export const usePhotoProfile = create((set) => ({
  photo: false,
  setPhoto: () => set((state) => ({ photo: !state.photo })),
}));
