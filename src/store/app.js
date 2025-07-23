import { create } from 'zustand';

export const useStore = create((set , get )=> ({
  currentCategory: 'deliveryDnepr',
  activeAdedCartPopup: false ,
  setCurrentCategory: (val) => {
    set({ currentCategory: val })
  },
   adedToCart: (val) => {
    set({ activeAdedCartPopup: val })
    setTimeout( () => {
      set({ activeAdedCartPopup: false })
    } , 4000)
  },
}));

