import { create } from "zustand";

type SidebarStore = {
  open: boolean;
  toggleSideBar: (value: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>()((set) => ({
  open: true,
  toggleSideBar: (value: boolean) => set((state) => ({ open: value })),
}));
