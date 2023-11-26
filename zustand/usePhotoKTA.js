import { create } from "zustand";

export const usePhotoKTA = create((set) => ({
  kta: false,
  imageUpload: null,
  linkImage: null,
  setKta: () => set((state) => ({ kta: !state.kta })),
  setImageUpload: (val) => set(() => ({ imageUpload: val })),
  setLinkImage: (val) => set(() => ({ linkImage: val })),
}));
