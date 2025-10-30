import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLogout } from "../store/actions/auth";

const UserSetting = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(asyncLogout());
    navigate("/");
  };

  return (
    <div className="bg-white py-2 px-3 flex flex-col gap-2">
      <h2>{users && users?.username}</h2>
      <p className="opacity-40">{users && users?.email}</p>
      <button
        className="mt-5 w-fit py-2 px-4 text-white rounded bg-blue-500"
        onClick={logoutHandler}
      >
        Log out
      </button>
    </div>
  );
};

export default UserSetting;
