import { createSlice } from '@reduxjs/toolkit';
import { login, refreshUser, register, logout } from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLogedIn: false,
    isRefreshing: false,
  },

  extraReducers: builder => {
    builder

      .addCase(register.fulfilled, (state, action) => {
        state.isLogedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLogedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLogedIn = true;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, state => {
        state.isLogedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      });
  },
});

export const authReducer = slice.reducer;
