import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    globalSettings: {},
  },
  reducers: {
    getGlobalSettings: ((state, action) => ({
      ...state, globalSettings: action.payload,
    })),
  },
});

export const { getGlobalSettings } = globalSlice.actions;

export const selectGlobal = (state) => state.globalRepo;

export default globalSlice.reducer;
