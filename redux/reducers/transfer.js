/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { transferAction } from '../actions/transfer';

const initialState = {
  amount: '',
  notes: '',
  recipientId: '',
  pin: '',
  transferTime: '',
};
const transferReducer = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    inputAmount: (state, { payload }) => {
      state.amount = payload.amount;
      state.notes = payload.notes;
      state.recipientId = payload.recipientId;
      state.transferTime = payload.transferTime;
    },
    inputPin: (state, action) => {
      const { pin, cb } = action.payload;
      cb();
      return (state = {
        ...state,
        ...{ pin },
      });
    },
  },
  extraReducers: (build) => {
    build.addCase(transferAction.fulfilled, (state, action) => {
      state = {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const { inputAmount, inputPin } = transferReducer.actions;

export default transferReducer.reducer;
