import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { decrement } = CounterSlice.actions;

export default CounterSlice.reducer;
