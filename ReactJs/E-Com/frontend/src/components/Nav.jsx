import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogout } from "../store/actions/auth";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isActiveLink = ({ isActive }) => {
    return isActive ? "opacity-80" : "";
  };

  const logoutHandler = () => {
    dispatch(asyncLogout());
    navigate("/");
  };

  return (
    <nav className="flex gap-x-10 justify-center mb-4 py-3 bg-white shadow-xs">
      <NavLink to="/" className={isActiveLink}>
        Home
      </NavLink>
      <NavLink to="/products" className={isActiveLink}>
        Products
      </NavLink>
      {user ? (
        <>
          <NavLink to="/create-product" className={isActiveLink}>
            Create Product
          </NavLink>
          <button onClick={logoutHandler}>Log out</button>
        </>
      ) : (
        <NavLink to="/login" className={isActiveLink}>
          Log in
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
