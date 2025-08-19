import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set, get) => ({
      authUser: false,
      userId: null,
      userName: '',
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
        if (!val) {
          localStorage.removeItem("app-storage");
          set({ authUser: false ,   userName: '',  userId: null,});
        } else {
          set({ authUser: true });
        }
      },
      setUserName: (val) => {
        set({userName: val});
      },
         setUserId: (val) => {
        set({userId: val});
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
