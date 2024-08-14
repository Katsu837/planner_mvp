import { ENG_WEEKDAY, ENG_MONTH } from "@/utils/language";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDate: new Date().getDate(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  currentWeekday: new Date().getDay(),
  selectDate: new Date().getDate(),
  selectMonth: new Date().getMonth(),
  selectYear: new Date().getFullYear(),
  monthNames: ENG_MONTH,
  weekdays: ENG_WEEKDAY,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setYear: (state, { payload }) => {
      if (payload !== state.selectYear) state.currentYear = payload;
    },
    setMonth: (state, { payload }) => {
      if (payload !== state.selectMonth) {
      }
    },
  },
});

export const { actions, reducer } = dateSlice;
