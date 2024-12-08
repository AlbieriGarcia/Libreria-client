import { configureStore } from "@reduxjs/toolkit";
import  filterBookReducer  from "./features/filterBookSlice";

export const store = configureStore({
    reducer: {
        filterBookReducer
    }
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch