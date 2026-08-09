import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth.slice';
import { cocktailsReducer } from './cocktails.slice';

export const appStore = configureStore({
  reducer: {
    auth: authReducer,
    cocktails: cocktailsReducer
  }
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
