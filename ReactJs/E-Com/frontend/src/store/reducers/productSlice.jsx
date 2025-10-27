import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { loadProducts, deletProduct } = productSlice.actions;
export default productSlice.reducer;
