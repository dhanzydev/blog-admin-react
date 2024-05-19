import { createSlice } from "@reduxjs/toolkit";

import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
      Cookies.set("token", action.payload.token, { expires: 1 / 24 });
    },
    logoutAction: (state) => {
      state.user = null;
      Cookies.remove("token");
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
