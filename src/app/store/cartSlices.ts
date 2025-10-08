"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface CounterState {
    value : number
}
const initalState : CounterState  ={
    value : 0
}

export const SilceCounter = createSlice({
    name : "calc",
    initialState : initalState,
    reducers: {
        sum : (state , action : PayloadAction<{a : number , b : number}> ) => {
            state.value = action.payload.a + action.payload.b
        },
        sub : ( state , action : PayloadAction<{a : number , b : number}>) => {
            state.value = action.payload.a - action.payload.b
        },
        div : ( state , action : PayloadAction<{a : number , b : number}>) => {
            state.value = action.payload.a / action.payload.b
        },
        mul : ( state , action : PayloadAction<{a : number , b : number}>) => {
            state.value = action.payload.a * action.payload.b
        },
    }
    
})

export const { sum , div , mul , sub } = SilceCounter.actions
export default SilceCounter.reducer