import { loadUser, logoutuser } from "../reducers/userSlice";
import axios from "../../utils/axiosConfig";

export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadUser(user));
    else console.log("User not logged in!");
  } catch (error) {
    console.error(error);
  }
};

export const asyncLogout = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(logoutuser());
  } catch (error) {
    console.error(error);
  }
};

export const asyncLogin = (user) => async () => {
  try {
    const { data } = await axios.get(
      `/users?username=${user.username}&password=${user.password}`
    );

    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
    } else console.log("User not found!");
  } catch (error) {
    console.error(error);
  }
};

export const asyncSignup = (user) => async () => {
  try {
    await axios.post("/users", user);
  } catch (error) {
    console.error(error);
  }
};
