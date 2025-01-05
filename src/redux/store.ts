import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterBookReducer from "./features/filterBookSlice";
import bookQtyReducer from "./features/bookQtySlice";
import bookDataReducer from "./features/bookDataSlice";
import updateComponentReducer from "./features/updateComponentsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./customStorage"; // Usa el archivo creado en el Paso 1
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage, // Usa el almacenamiento condicional
  whitelist: ["bookDataState"],
};

const rootReducer = combineReducers({
  filterBookState: filterBookReducer,
  bookQtyState: bookQtyReducer,
  bookDataState: bookDataReducer,
  updateComponentState: updateComponentReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
