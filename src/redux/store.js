import { configureStore } from '@reduxjs/toolkit';
import cartreducer from './slices/cartSlice';
import heroReducer from './slices/heroSlice';
import offersHeadlineReducer from './slices/offersHeadlineSlice';
import dealReducer from './slices/dealSlice';
import collectionReducer from './slices/collectionSlice';
import bannerReducer from './slices/bannerSlice';

export const store = configureStore({
  reducer: {
    cart: cartreducer,
    hero: heroReducer,
    offersHeadline: offersHeadlineReducer,
    deal: dealReducer,
    collection: collectionReducer,
    banner: bannerReducer,
  },
});
