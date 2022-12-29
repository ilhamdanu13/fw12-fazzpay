import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helper/http";

export const loginAction = createAsyncThunk("auth/loginAction", async ({ email, password, cb }) => {
  try {
    const { data } = await http().post("/auth/login", { email, password });
    cb();
    return data.results;
  } catch (error) {
    return error.response.data.message;
  }
});

export const registerAction = createAsyncThunk("auth/registerAction", async ({ firstName, lastName, email, password, pin, cb }) => {
  try {
    const { data } = await http().post("/auth/register", {
      firstName,
      lastName,
      email,
      password,
      pin,
    });
    cb();
    return data.results;
  } catch (error) {
    return error.response.data.message;
  }
});
