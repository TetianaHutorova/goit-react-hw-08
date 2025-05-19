import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh". Використовується у компоненті App під час його монтування.

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global",
});
const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  "auth/register",
  async (body, thunkApi) => {
    try {
      const resp = await goitAPI.post("/users/signup", body);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (body, thunkApi) => {
  try {
    const resp = await goitAPI.post("/users/login", body);
     setAuthHeader(resp.data.token);
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const resp = await goitAPI.post("/users/logout");
    removeAuthHeader();
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
