import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export const authSlice = createSlice({
  name: "authUser",
  initialState: {
    token: "",
  },
  reducers: {
    addToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = "";
    },
  },
});

const persistConfig = {
  key: "authUser",
  storage,
  whitelist: ["token"],
};

export const persistedAuthUserReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { addToken, removeToken } = authSlice.actions;
