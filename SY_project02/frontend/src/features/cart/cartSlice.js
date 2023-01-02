import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "http://stopupsapi.shop:8080/api/?apikey=TeamYN1671673527249&Category=분류&Name=";

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
  amount: 0, // 각 상품의 갯수
  total: 0, // 총 가격
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
    //장바구니에 상품 추가
    addToCart: (state, action) => {
      console.log(state.cartItems);
      const itemInCarts = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.cooked === action.payload.cooked &&
          item.ice === action.payload.ICE
      );

      if (itemInCarts) {
        itemInCarts.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.amount++;
    },
    clearCart: (state) => {
      state.cartItems = []; //is equal to next line ;
      state.amount = 0;
      //   return { cartItems: [] }; =  많은 수의 input을 한꺼번에 제어해야할때 유용하게 쓰일 수 있음
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    removeFromCart(state, action) {
      const itemIds = action.payload;
      console.log(action.payload, "removeFromCart");
      // 특정 id값에 해당하는 상품만을 제거 = 선택된 아이템만 제거
      state.cartItems = state.cartItems.filter((item) =>
        itemIds.find(
          (value) =>
            !(
              item.id === value.id &&
              item.size === value.size &&
              item.cooked === value.cooked &&
              item.ice === value.ice
            )
        )
      );
      state.amount--;
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.cooked === action.payload.cooked &&
          item.ice === action.payload.ice
      );

      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.cooked === action.payload.cooked &&
          item.ice === action.payload.ice
      );
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculateTotals: (state, action) => {
      let CartDetailamount = 0;
      let total = 0;

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

      // Item에 있는 아이템들의 총합과 총량을 state.amount, state.total에 저장
      Item.forEach((item) => {
        CartDetailamount += item.quantity;
        total += item.quantity * item.price;
      });
      state.CartDetailamount = CartDetailamount;
      state.total = total;

      //      state.amount  = amount <<  이 부분 때문에 자꾸 장바구니 amount 초기화 되서 위에 initialState  에 변수를 하나 더 추가
    },
    saveCart(state, action) {
      const itemIds = action.payload;
      // 특정 id값에 해당하는 상품만을 제거 = 선택된 아이템만 제거
      state.cartItems = state.cartItems.filter((item) =>
        itemIds.includes(item.id)
      );
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
