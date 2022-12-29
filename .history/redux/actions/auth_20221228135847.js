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

// export const phoneNumberAction = createAsyncThunk("auth/phoneNumberAction", async ({ phoneNumber }) => {
//   try {
//     const { data } = await http().post("/profile/phone-number", { phoneNumber });
//     cb();
//     return data.results;
//   } catch (error) {
//     return error.message.data.message;
//   }
// });

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
