import { NavLink } from "react-router-dom";

const Nav = () => {
  const routes = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/recipes",
      name: "Recipes",
    },
    {
      to: "/create-recipe",
      name: "Create Recipe",
    },
  ];

  const route = routes.map((link, idx) => {
    return (
      <NavLink
        key={idx}
        to={link.to}
        className={({ isActive }) =>
          `${isActive ? "text-red-400" : null} ${
            link.to === "/create-recipe"
              ? "bg-white text-zinc-900 px-3 py-2 rounded"
              : null
          }`
        }
      >
        {link.name}
      </NavLink>
    );
  });
  return (
    <nav className="flex py-6 px-[10%] justify-center items-center gap-10 bg-zinc-900 text-white mb-5">
      {route}
    </nav>
  );
};

export default Nav;
