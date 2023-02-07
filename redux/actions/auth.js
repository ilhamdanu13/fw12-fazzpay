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

export const registerAction = createAsyncThunk("auth/registerAction", async ({ firstName, lastName, email, password, cb }) => {
  try {
    const { data } = await http().post("/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });
    cb();
    return data.results;
  } catch (error) {
    return error.response.data.message;
  }
});

export const forgotPasswordAction = createAsyncThunk("auth/forgotPasswordAction", async ({ email, cb }) => {
  try {
    const { data } = await http().post("auth/forgot-password", {
      email,
    });
    cb();
    return data.results;
  } catch (error) {
    return error.response.data.message;
  }
});
