import { create } from "zustand";

export const useModalEducation = create((set) => ({
  education: true,
  setEducation: () => set((state) => ({ education: !state.education })),
}));
