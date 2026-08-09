import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/user.model';

export type RequestStatus = 'idle' | 'loading' | 'ready' | 'error';

export interface AuthState {
  user: User | null;
  status: RequestStatus;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStarted: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    authSucceeded: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = 'ready';
      state.error = null;
    },
    authFailed: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.status = 'error';
      state.error = action.payload;
    },
    signedOut: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    }
  }
});

export const { authStarted, authSucceeded, authFailed, signedOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
