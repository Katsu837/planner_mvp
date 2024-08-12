import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const RootReducer = combineReducers({});

export const store = configureStore({
  reducer: RootReducer,
});
