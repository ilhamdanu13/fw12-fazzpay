/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helper/http';

export const transferAction = createAsyncThunk('transfer/doTransfer', async ({ token, ...payload }) => {
  const { data } = await http(token).post('/transactions/transfer', { ...payload });
  return data.results;
});
