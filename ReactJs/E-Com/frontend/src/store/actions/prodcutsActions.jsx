import axios from "../../utils/axiosConfig";
import { loadProducts } from "../reducers/productSlice";

export const asynceCreateProducts = (product) => async () => {
  try {
    await axios.post("/products", product);
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
