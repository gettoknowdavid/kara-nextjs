import { createSlice } from '@reduxjs/toolkit';

export const bagSlice = createSlice({
  name: 'bag',
  initialState: {
    isBagOpen: false,
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    toggleBagPopup: (state) => ({
      // Open and close the bag drawer
      ...state, isBagOpen: !state.isBagOpen,
    }),
    addToBag: (state, action) => {
      // Get the ID of the current item
      const { id } = action.payload;

      // Check if item is already in bag
      const isInBag = state.items.map((item) => item.id).includes(id);

      let bagItems;

      if (isInBag) {
        const items = state.items.map((item) => {
          if (item.id === id) {
            // If the selected item is already in the bag
            // Increase the quantity of that item by 1
            return { ...item, quantity: item.quantity + 1 };
          }
          // If the selected item is not in the bag
          // Add the item to bag
          return item;
        });
        bagItems = [...items];
      } else {
        bagItems = [...state.items, action.payload];
      }

      const quantity = bagItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);

      return { ...state, items: bagItems, totalQuantity: quantity };
    },
    removeFromBag: (state, action) => {
      // Get item id
      const { id } = action.payload;
      return {
        ...state,
        // Remove item from bag
        items: state.items.filter((item) => item.id !== id),
      };
    },
    clearBag: (state) => ({
      // Clears the bag
      ...state, ...state.initialState,
    }),
  },

});

export const {
  addToBag, clearBag, removeFromBag, toggleBagPopup,
} = bagSlice.actions;

export const selectBag = (state) => state.bagRepo;

export default bagSlice.reducer;
