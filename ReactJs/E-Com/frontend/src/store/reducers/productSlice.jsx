import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
