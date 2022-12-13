import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};
// 도입 미결정, 사용x
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = userSlice.actions;

//selectors
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
