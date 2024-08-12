import { ENG_DAY_OF_WEEK, ENG_MONTH } from "@/utils/language";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: new Date().getDate(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  day: new Date().getDay(),
  countDayOfMonth:
    33 -
    new Date(new Date().getFullYear(), new Date().getMonth(), 33).getDate(),
  monthNames: ENG_MONTH,
  dayOfWeek: ENG_DAY_OF_WEEK,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setYear: (state, { payload }) => {
      if (payload !== state.currentYear) state.currentYear = payload;
    },
  },
});
