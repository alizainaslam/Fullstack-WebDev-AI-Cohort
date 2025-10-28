import axios from "../../utils/axiosConfig";
import { loadProducts } from "../reducers/productSlice";

export const asynceCreateProducts = (product) => async (dispatch) => {
  try {
    await axios.post("/products", product);
    dispatch(asynceLoadProducts());
  } catch (error) {
    console.error(error);
  }
};

export const asynceLoadProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProducts(data));
  } catch (error) {
    console.error(error);
  }
};

export const asynceDeleteProducts = (id) => async (dispatch) => {
  try {
    await axios.delete(`/products/${id}`);
    dispatch(asynceLoadProducts());
  } catch (error) {
    console.error(error);
  }
};

export const asynceUpdateProducts = (id, updateData) => async (dispatch) => {
  try {
    await axios.patch(`/products/${id}`, updateData);
    dispatch(asynceLoadProducts());
  } catch (error) {
    console.error(error);
  }
};
