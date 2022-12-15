import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the action type for the thunk
const CANCEL_ORDER = "CANCEL_ORDER";

// Create the thunk using createAsyncThunk
export const cancelOrder = createAsyncThunk(
  CANCEL_ORDER,
  async (orderId, thunkAPI) => {
    // Perform the operation to cancel the order
    // For example, you might make an HTTP request to a server to cancel the order
    // const response = await someAPI.cancelOrder(orderId);
    // Return the result of the operation
    // return response.data;
  }
);

const cancelOrderSlice = createSlice({
  name: "cancelOrder",
  initialState: {
    order: {
      id: 1, //주문번호
      status: "pending",
    },
  },
  reducers: {
    [cancelOrder.fulfilled]: (state, action) => {
      state.order = action.payload;
    },
  },
});

// Export the reducer and the thunk
export const cancelOrderReducer = cancelOrderSlice.reducer;

//실제 api요청시
// import axios from 'axios';
// import { cancelOrder } from './cancelOrderSlice';

// const payment = (req, res, next) => {
//   // Check if the purchase was canceled
//   if (req.query.message === 'CANCELED') {
//     // Dispatch the cancelOrder action
//     store.dispatch(cancelOrder(req.query.orderId));
//   }

//   // Perform other logic for the payment endpoint
//   res.send({
//     message: "payment",
//   });
//   next();
// };

// // Other code for the payment, success, and failed functions...
