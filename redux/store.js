import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { globalSlice } from '@/slices/global.slice';
import { bagSlice } from '@/slices/bag.slice';
import { wishSlice } from '@/slices/wish.slice';

const persistBagConfig = { key: 'bag', version: 1, storage };
const persistWishConfig = { key: 'wish', version: 1, storage };

export const karaStore = (preloadedState) => configureStore({
  reducer: combineReducers({
    globalRepo: globalSlice.reducer,
    bagRepo: persistReducer(persistBagConfig, bagSlice.reducer),
    wishRepo: persistReducer(persistWishConfig, wishSlice.reducer),
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  preloadedState,
});
