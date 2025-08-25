import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userFavoritesStore = create(
  persist(
    (set, get) => ({
      // userId: null,
      allIdFavorites: [],
      favorites: [],

      setUserId: (val) => set({ userId: val }),

      addToFavorites: async ( userId , cardItem) => {
        // const { userId } = get();
        if (!userId) return;

        try {
          const response = await fetch(
            `https://react-sushi.onrender.com/adedToFavorites/${userId}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(cardItem),
            }
          );

          if (response.ok) {
            set((state) => ({
              allIdFavorites: [...state.allIdFavorites, cardItem.id], // добавляем id
              favorites: [...state.favorites, cardItem], // добавляем объект для рендера
            }));
          }
        } catch (error) {
          console.error(error);
        }
      },

      getAllIdFavorites: async (userId) => {
        if (!userId) return;

        try {
          const response = await fetch(
            `https://react-sushi.onrender.com/getAllIdFavorites/${userId}`
          );
          const data = await response.json();
          set({ allIdFavorites: data });
        } catch (error) {
          console.error(error);
        }
      },

      clearFavorites: async (userId) => {
        // const { userId } = get();
        if (!userId) return;

        try {
          const response = await fetch(
            `https://react-sushi.onrender.com/clearFavorites/${userId}`,
            { method: "DELETE" }
          );
          if (response.ok) {
            set({ allIdFavorites: [], favorites: [] });
          }
        } catch (error) {
          console.error(error);
        }
      },

      getFavorites: async (userId) => {
        if (!userId) return;

        try {
          const response = await fetch(
            `https://react-sushi.onrender.com/getFavorites/${userId}`
          );
          const data = await response.json();
          set({ favorites: data || [] });
        } catch (error) {
          console.error(error);
        }
      },
    }),
    { name: "favorites-store" }
  )
);
