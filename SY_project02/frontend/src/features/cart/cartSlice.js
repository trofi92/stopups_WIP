import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project"; // 엔드포인트 받아서 변경할것

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      console.log(thunkAPI);
      const response = await axios(url); // url에 get요청
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
  cartItems: [], // 상품 종류
  amount: 1, // 각 상품의 갯수
  total: 0, // 총 가격
  isLoading: true,
  statusByName: {},
  toggle: false,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []; //is equal to next line ;
      //   return { cartItems: [] }; =  많은 수의 input을 한꺼번에 제어해야할때 유용하게 쓰일 수 있음
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    addToItem: (state, action) => {
      const Item = action.payload;
      state.cartItems.push(Item);
      console.log(state.cartItems);
      // const existingItem = state.cartItems.find((value) => {
      //   return value.id === Item.id;
      // });
      // if (!existingItem) {
      //   state.cartItems.push(Item);
      // } else {
      //   state.amount = state.amount + 1;
      // }

      state.totalAmount++;
    },
    toggle: (state, action) => {
      state.toggle = !state.toggle;
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },

  // 비동기 처리를 위한 createAsyncThunk reducer 함수들
  // 반환되는 promise의 상태에 따라 로딩 상태를 변경시킴
  // 이하 코드는 RTK Query 도입시 사용
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
  addToItem,
  clearCart,
  calculateTotals,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  toggle,
} = cartSlice.actions;
