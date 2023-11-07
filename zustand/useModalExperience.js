import { create } from "zustand";

export const useModalExperience = create((set) => ({
  experience: false,
  isEdit: false,
  data: {},
  setExperience: () => set((state) => ({ experience: !state.experience })),
  setIsEdit: () => set((state) => ({ isEdit: !state.isEdit })),
  setData: (val) => set(() => ({ data: val })),
}));
