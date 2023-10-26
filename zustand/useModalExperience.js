import { create } from "zustand";

export const useModalExperience = create((set) => ({
  experience: true,
  setExperience: () => set((state) => ({ experience: !state.experience })),
}));
