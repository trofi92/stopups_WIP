import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const itemInFavorites = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (itemInFavorites) {
        itemInFavorites.quantity++;
      } else {
        state.favorites.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.favorites.filter(
        (item) => item.id !== action.payload
      );
      state.favorites = removeItem;
    },
    removeFromCart(state, action) {
      const itemIds = action.payload;
      // Filter out the items with the specified IDs
      state.favorites = state.favorites.filter(
          (item) => !itemIds.includes(item.id)
      );
    },
    removeAllItem: (state) => {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const {
  addToFavorites,
  removeItem,
  removeFromCart,
  removeAllItem
} = favoritesSlice.actions;
