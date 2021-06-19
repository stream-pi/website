import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientState } from "./Types";

const currentYear = new Date().getFullYear();

const initialState: ClientState = {
  showNavbar: true,
  colorTheme: "dark",
  currentYear: currentYear,
};

const slice = createSlice({
  name: "clientState",
  initialState,
  reducers: {
    reset(state) {
      state.showNavbar = true;
      state.colorTheme = "dark";
      state.currentYear = currentYear;
    },
    setShowNavbar(state, action: PayloadAction<boolean>) {
      state.showNavbar = action.payload;
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
    setCurrentYear(state, action: PayloadAction<number>) {
      state.currentYear = action.payload;
    },
  },
});

export const { actions: clientActions, reducer: clientReducer } = slice;
