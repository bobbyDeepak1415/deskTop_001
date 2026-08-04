import { createSlice } from "@reduxjs/toolkit"



const initialState={
    count:0
}



const CounterReducer=createSlice({
    name:"counter"
})