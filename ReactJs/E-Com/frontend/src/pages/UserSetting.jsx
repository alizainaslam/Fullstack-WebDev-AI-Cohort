import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLogout } from "../store/actions/auth";

const UserSetting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(asyncLogout());
    navigate("/");
  };
  return (
    <div>
      UserSetting
      <button onClick={logoutHandler}>Log out</button>
    </div>
  );
};

export default UserSetting;
