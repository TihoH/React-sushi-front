import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set, get) => ({
      currentCategory: "deliveryDnepr",
      activeSearch: false ,
      setCurrentCategory: (val) => set({ currentCategory: val }),
      setActiveSearch: (val) => {
        set({ activeSearch: val })
      }
    }),
  )
);