import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as dateReducer } from "./dateState/date.slice";

const RootReducer = combineReducers({
  date: dateReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});
