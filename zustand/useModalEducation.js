import { create } from "zustand";

export const useModalEducation = create((set) => ({
  education: false,
  isEdit: false,
  data: {},
  setEducation: () => set((state) => ({ education: !state.education })),
  setIsEdit: () => set((state) => ({ isEdit: !state.isEdit })),
  setData: (val) => set(() => ({ data: val })),
}));
