import axios from "../../utils/axiosConfig";

const asyncGetUser = async () => {
  try {
    const user = await axios.get("/user");
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

export default asyncGetUser;
