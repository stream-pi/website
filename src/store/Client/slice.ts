import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientState } from "./Types";

const initialState: ClientState = {
  colorTheme: "dark",
};

const slice = createSlice({
  name: "clientState",
  initialState,
  reducers: {
    reset(state) {
      state.colorTheme = "dark";
    },
    setColorTheme(state, action: PayloadAction<"dark" | "light">) {
      state.colorTheme = action.payload;
    },
    setColorThemeBoolean(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.colorTheme = "dark";
      } else {
        state.colorTheme = "light";
      }
    },
  },
});

export const { actions: clientActions, reducer: clientReducer } = slice;
