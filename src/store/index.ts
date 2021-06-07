import { configureStore } from "@reduxjs/toolkit";
import { clientReducer } from "./Client/slice";

export function makeStore() {
  return configureStore({
    reducer: {
      client: clientReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
