import { createSlice } from "@reduxjs/toolkit";

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
    removeAllItem: (state) => {
      state.favorites = [];
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addToFavorites, removeItem, removeAllItem } =
  favoritesSlice.actions;
