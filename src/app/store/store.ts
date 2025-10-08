"use client"
import SliceCounter from "./cartSlices"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer : {
        calculation : SliceCounter

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch