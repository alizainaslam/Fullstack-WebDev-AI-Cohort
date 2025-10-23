import { NavLink } from "react-router-dom";

const Nav = () => {
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
      <NavLink to="/login" className={isActiveLink}>
        Log in
      </NavLink>
    </nav>
  );
};

export default Nav;
