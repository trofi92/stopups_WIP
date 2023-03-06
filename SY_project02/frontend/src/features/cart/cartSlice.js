import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../utils/urls";

const url = `${API}&Category=분류&Name=`;

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      console.log(thunkAPI);
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "문제가 발생했습니다. 다시 시도해주세요.",
        console.error(error)
      );
    }
  }
);

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
  statusByName: {},
  toggle: false,
  totalAmount: 0,
  CartDetailamount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state.cartItems);
      const itemInCarts = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.cooked === action.payload.cooked &&
          item.ice === action.payload.ice
      );

      if (itemInCarts) {
        itemInCarts.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.amount++;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      );
    },
    removeFromCart(state, action) {
      const itemIds = action.payload;
      console.log(action.payload, "removeFromCart");

      state.cartItems = state.cartItems.filter(
        (item) =>
          !itemIds.find(
            (value) =>
              item.id === value.id &&
              item.size === value.size &&
              item.cooked === value.cooked &&
              item.ice === value.ice
          )
      );
      state.amount = state.amount - itemIds.length;
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.cooked === action.payload.cooked &&
          item.ice === action.payload.ice
      );

      cartItem.quantity++;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.cooked === action.payload.cooked &&
          item.ice === action.payload.ice
      );
      cartItem.quantity--;
    },
    calculateTotals: (state, action) => {
      let CartDetailamount = 0;
      let total = 0;
      let totalAmount = 0;

      const itemIds = action.payload;

      const Item = state.cartItems.filter((item) =>
        itemIds.find(
          (value) =>
            item.id === value.id &&
            item.size === value.size &&
            item.cooked === value.cooked &&
            item.ice === value.ice
        )
      );

      Item.forEach((item) => {
        CartDetailamount += item.quantity;
        total += item.quantity * item.price;
        totalAmount += item.quantity;
      });
      state.CartDetailamount = CartDetailamount;
      state.total = total;
      state.totalAmount = totalAmount;
    },
    saveCart(state, action) {
      const itemIds = action.payload;
      state.cartItems = state.cartItems.filter((item) =>
        itemIds.includes(item.id)
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state, action) => {
        state.statusByName = "pending";
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.statusByName = "fulfilled";
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.statusByName = "rejected";
      });
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  addToItem,
  clearCart,
  removeItem,
  removeFromCart,
  increase,
  decrease,
  calculateTotals,
  saveCart,
  toggle,
} = cartSlice.actions;
