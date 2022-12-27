import { configureStore } from '@reduxjs/toolkit'
import PreviewGallerySlice from '../Slices/PreviewGallerySlice';


export const store = configureStore({
    reducer: {PreviewGallerySlice},
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;