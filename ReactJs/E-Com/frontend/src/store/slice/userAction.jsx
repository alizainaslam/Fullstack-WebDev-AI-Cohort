import axios from "../../utils/axiosConfig";
import { loadUser } from "./userSlice";

const asyncGetUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/user");
    dispatch(loadUser(data));
  } catch (error) {
    console.log(error);
  }
};

export default asyncGetUser;
