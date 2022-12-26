import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  email: "",
  name: "",
  nickname: "",
  telephone: "",
  location: "",
};

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUEmail(state, action) {
      state.email = action.payload;
    },
    setUName(state, action) {
      state.name = action.payload;
    },
    setUNickname(state, action) {
      state.nickname = action.payload;
    },
    setUTelephone(state, action) {
      state.telephone = action.payload;
    },
    setULocation(state, action) {
      state.location = action.payload;
    },
    setULogout(state, action) {
      return initialState;
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, () => initialState);
    },
  },
});

export const {
  setUEmail,
  setUName,
  setUNickname,
  setUTelephone,
  setULocation,
  setULogout,
} = userInfoSlice.actions;

export const userInfoReducer = userInfoSlice.reducer;
