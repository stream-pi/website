import { FC } from "react";
import { Provider } from "react-redux";
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

const StreamPiReduxStore: FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StreamPiReduxStore;
