import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeColorHandler = (ev) => (ev.isActive ? "text-red-400" : "null");

  return (
    <nav className="flex gap-[10%] justify-center mb-5 pt-5">
      <NavLink to="/" className={(ev) => activeColorHandler(ev)}>
        Home
      </NavLink>
      <NavLink to="/products" className={(ev) => activeColorHandler(ev)}>
        Products
      </NavLink>
      <NavLink to="/services" className={(ev) => activeColorHandler(ev)}>
        Services
      </NavLink>
      <NavLink to="/contact" className={(ev) => activeColorHandler(ev)}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Nav;
