import { createSlice } from "@reduxjs/toolkit"



const initialState={
    count:0
}



const CounterReducer=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
      count:state.count+1
        },
        decrement:(state,action)=>{

        }
    }
})


