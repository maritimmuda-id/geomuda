import { create } from "zustand";

export const useFakeLogin = create((set) => ({
  data: null,
  setAccount: (account) => set(() => ({ data: account })),
}));
