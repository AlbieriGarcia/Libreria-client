import { configureStore } from "@reduxjs/toolkit";
import  filterBookReducer  from "./features/filterBookSlice";
import bookDataReducer from "./features/bookDataSlice";
import  updateComponentReducer  from "./features/updateComponentsSlice";

export const store = configureStore({
    reducer: {
        filterBookReducer,
        bookDataReducer,
        updateComponentReducer
    }
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch