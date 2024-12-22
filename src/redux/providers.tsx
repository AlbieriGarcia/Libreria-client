"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/emotionCache";

const persistor = persistStore(store);
const clientSideEmotionCache = createEmotionCache();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="h-screen flex items-center justify-center">
              Loading...
            </div>
          }
          persistor={persistor}
        >
          {children}
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}
