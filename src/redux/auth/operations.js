import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const savedToken = thunkApi.getState().auth.token;
      if (!savedToken) {
        return thunkApi.rejectWithValue("Token is not exist");
      }
      setAuthHeader(savedToken);
      const resp = await goitAPI.get("/users/current");
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
