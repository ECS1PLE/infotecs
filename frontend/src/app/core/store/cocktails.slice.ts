import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cocktail, CocktailSummary } from '../models/cocktail.model';
import { RequestStatus } from './auth.slice';

export interface CocktailsState {
  items: CocktailSummary[];
  current: Cocktail | null;
  status: RequestStatus;
  mutationStatus: RequestStatus;
  error: string | null;
}

const initialState: CocktailsState = {
  items: [],
  current: null,
  status: 'idle',
  mutationStatus: 'idle',
  error: null
};

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    listStarted: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    listSucceeded: (state, action: PayloadAction<CocktailSummary[]>) => {
      state.items = action.payload;
      state.status = 'ready';
      state.error = null;
    },
    requestFailed: (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.mutationStatus = 'error';
      state.error = action.payload;
    },
    currentStarted: (state) => {
      state.status = 'loading';
      state.current = null;
      state.error = null;
    },
    currentSucceeded: (state, action: PayloadAction<Cocktail>) => {
      state.current = action.payload;
      state.status = 'ready';
      state.error = null;
    },
    clearCurrent: (state) => {
      state.current = null;
    },
    mutationStarted: (state) => {
      state.mutationStatus = 'loading';
      state.error = null;
    },
    mutationSucceeded: (state, action: PayloadAction<Cocktail>) => {
      const cocktail = action.payload;
      const summary: CocktailSummary = {
        id: cocktail.id,
        name: cocktail.name,
        description: cocktail.description,
        imageUrl: cocktail.imageUrl,
        createdAt: cocktail.createdAt,
        updatedAt: cocktail.updatedAt
      };
      const index = state.items.findIndex((item) => item.id === cocktail.id);
      if (index >= 0) {
        state.items[index] = summary;
      } else {
        state.items.unshift(summary);
      }
      state.current = cocktail;
      state.mutationStatus = 'ready';
    },
    deleteSucceeded: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (state.current?.id === action.payload) {
        state.current = null;
      }
      state.mutationStatus = 'ready';
    },
    resetMutation: (state) => {
      state.mutationStatus = 'idle';
      state.error = null;
    }
  }
});

export const {
  listStarted,
  listSucceeded,
  requestFailed,
  currentStarted,
  currentSucceeded,
  clearCurrent,
  mutationStarted,
  mutationSucceeded,
  deleteSucceeded,
  resetMutation
} = cocktailsSlice.actions;

export const cocktailsReducer = cocktailsSlice.reducer;
