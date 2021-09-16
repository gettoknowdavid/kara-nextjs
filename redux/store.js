import { combineReducers, configureStore } from '@reduxjs/toolkit';
import globalReducer from './slices/global.slice';

export const createStore = (preloadedState) => configureStore({
  reducer: combineReducers({
    globalRepo: globalReducer,
  }),
  preloadedState,
});
