import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userFavoritesStore = create(
  persist(
    (set, get) => ({
      allIdFavorites: [],
      favorites: [],

      setUserId: (val) => set({ userId: val }),

      addToFavorites: async (userId, cardItem , setIsActiveLoader) => {
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
            setIsActiveLoader(false)
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
      deleteFavorites: async (userId, productId , setIsActiveLoader) => {
        if (!userId || !productId) return;
        try {
          const response = await fetch(
            `https://react-sushi.onrender.com/deleteItemFavorites/${userId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({productId}),
            }
          );

          if (response.ok) {
            const {allIdFavorites} = get()
            setIsActiveLoader(false)

            set({ allIdFavorites: [...allIdFavorites].filter( item => item != productId ) })
          }
        } catch (error) {}
      },
    }),
    { name: "favorites-store" }
  )
);
