import { createSlice } from '@reduxjs/toolkit';

export const wishSlice = createSlice({
  name: 'wish',
  initialState: {
    wishes: [],
    totalWishes: 0,
  },
  reducers: {
    addWish: (state, action) => {
      // Get the ID of the current item
      const { id } = action.payload;

      // Check if item is already a wish
      const isWish = state.wishes.map((wish) => wish.id).includes(id);

      let wishItems;

      if (isWish) {
        const wishes = state.wishes.map((wish) => {
          if (wish.id === id) {
            // If the selected item is already a wish
            // Do nothing
            return { ...wish, isWish: true };
          }
          // If the selected item is not a wish
          // Add the item to wishlist
          return wish;
        });
        wishItems = [...wishes];
      } else {
        wishItems = [...state.wishes, action.payload];
      }

      return { ...state, wishes: wishItems, totalWishes: wishItems.length };
    },
    removeWish: (state, action) => {
      // Get id of selected item
      const { id } = action.payload;

      return {
        ...state,
        // Removes the selected wish from the wishlist
        wishes: state.wishes.filter((wish) => wish.id !== id),
      };
    },
    clearWishes: (state) => ({
      // Removes all wishes
      ...state, ...state.initialState,
    }),
  },
});

export const { addWish, clearWishes, removeWish } = wishSlice.actions;

export const selectWish = (state) => state.wishRepo;

export default wishSlice.reducer;
