import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count:{
    value:0
  }
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count.value += 1;
    },
    decrement: (state) => {
      state.count.value -= 1;
    },
    reset: (state) => {
      state.count.value = 0;
    },
    MultiplyByAmount: (state, action) => {
      state.count.value *= action.payload;
    },
  },
});

export const { increment,decrement,reset,MultiplyByAmount } = CounterSlice.actions;

export default CounterSlice.reducer;
