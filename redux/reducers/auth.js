/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { registerAction, loginAction } from '../actions/auth';

const initialState = {
  token: null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (build) => {
    build.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.token = payload.token;
    });

    build.addCase(registerAction.fulfilled, (state, { payload }) => {
      state.token = payload.token;
    });
  },
});

export const { logout } = authReducer.actions;

export default authReducer.reducer;
