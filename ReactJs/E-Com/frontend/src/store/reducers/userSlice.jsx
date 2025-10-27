import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.users = action.payload;
    },
    logoutuser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { loadUser, logoutuser } = userSlice.actions;
export default userSlice.reducer;
