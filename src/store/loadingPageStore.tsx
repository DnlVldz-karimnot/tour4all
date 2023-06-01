import { create } from "zustand";

type SidebarStore = {
  loading: boolean;
  toggleLoading: (value: boolean) => void;
};

export const useLoadingStore = create<SidebarStore>()((set) => ({
  loading: false,
  toggleLoading: (value: boolean) => set((state) => ({ loading: value })),
}));
