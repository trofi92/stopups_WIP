import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart/cartSlice";
import { favoritesReducer } from "../features/favorite/favoriteSlice";
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

const userPersistConfig = {
  key: "user",
  storage: storageSession,
};
const cartPersistConfig = {
  key: "cart",
  storage: storageSession,
};

export const userPersistedReducer = persistReducer(
  userPersistConfig,
  userInfoReducer
);
const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: cartPersistedReducer,
    favorite: favoritesReducer,
    user: userPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
