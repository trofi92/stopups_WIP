import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart/cartSlice";
import { favoritesReducer } from "../features/favorite/favoriteSlice";
import { cancelOrderReducer } from "../features/cancelOrder/cancelOrderSlice";

export const store = configureStore({
  reducer: {
    cancelOrder: cancelOrderReducer,
    cart: cartReducer,
    favorite: favoritesReducer,
  },
});
