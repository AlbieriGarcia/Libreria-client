import { configureStore } from "@reduxjs/toolkit";
import  filterBookReducer  from "./features/filterBookSlice";
import bookDataReducer from "./features/bookDataSlice";

export const store = configureStore({
    reducer: {
        filterBookReducer,
        bookDataReducer,
    }
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch