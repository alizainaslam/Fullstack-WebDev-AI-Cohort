import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  const isActiveLink = ({ isActive }) => {
    return isActive ? "opacity-80" : "";
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
        <NavLink to="/create-product" className={isActiveLink}>
          Create Product
        </NavLink>
      ) : (
        <NavLink to="/login" className={isActiveLink}>
          Log in
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
