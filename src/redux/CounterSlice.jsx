import { createSlice } from "@reduxjs/toolkit"



const initialState={
    count:0
}



const CounterReducer=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
      state.count=state.count+1
        },
        decrement:(state)=>{
state.count = state.count + 1;
        }
    }
})

export {increment,decrement} =CounterReducer.actions



export default CounterReducer
