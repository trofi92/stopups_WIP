import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart/cartSlice";
import { favoritesReducer } from "../features/favorite/favoriteSlice";
import { cancelOrderReducer } from "../features/cancelOrder/cancelOrderSlice";
import { userInfoReducer } from "../features/userInfo/userInfoSlice";
import storageSession from "redux-persist/lib/storage/session";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "user",
  storage: storageSession,
};

export const persistedReducer = persistReducer(
  persistConfig,
  userInfoReducer
);

export const store = configureStore({
  reducer: {
    cancelOrder: cancelOrderReducer,
    cart: cartReducer,
    favorite: favoritesReducer,
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
