import { configureStore } from "@reduxjs/toolkit";
import findPokemonSlice from "./slices/findPokemonSlice";

const store = configureStore({
  reducer: findPokemonSlice
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;