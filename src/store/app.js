import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set, get) => ({
      authUser: false,
      userAuthData: { name: "" },
      currentCategory: "deliveryDnepr",
      activeSearch: false,
      activeCategory: "",
      activeCities: "Дніпро",
      isActiveModalCities: false,
      setCurrentCategory: (val) => set({ currentCategory: val }),
      setActiveSearch: (val) => {
        set({ activeSearch: val });
      },
      setActiveCategory: (val) => {
        set({ activeCategory: val });
      },
      setActiveCities: (val) => {
        set({ activeCities: val });
      },
      openSitiesModal: (val) => {
        set({ isActiveModalCities: val });
      },
      setUserAuth: (val) =>
        set((state) => ({
          userAuthData: { ...state.userAuthData, name: val },
        })),
      setAuthUser: (val) => {
        set({ authUser: val });
      },
    }),
    {
      name: "app-storage",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => key !== "isActiveModalCities" // ⚠️ исключаем из сохранения
          )
        ),
    }
  )
);
