import { loadUser } from "../reducers/userSlice";
import axios from "../../utils/axiosConfig";


export const aasyncCurrentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loadUser(user));
    }
  } catch (error) {
    console.error(error);
  }
};

export const asyncLogin = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?username=${user.username}&password=${user.password}`
    );

    if (data.length > 0) {
      dispatch(loadUser(data[0]));
      localStorage.setItem("user", JSON.stringify(data[0]));
    } else console.log("User not found!");
  } catch (error) {
    console.error(error);
  }
};

export const asyncSignup = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("/users", user);
    dispatch(loadUser(data));
  } catch (error) {
    console.error(error);
  }
};
