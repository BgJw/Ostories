import { configureStore } from '@reduxjs/toolkit'
import PreviewGallerySlice from '../Slices/PreviewGallerySlice';
import ProductSlice from '../Slices/ProductSlice';

export const store = configureStore({
    reducer: {
      PreviewGallerySlice,
      ProductSlice},
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;