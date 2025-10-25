import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Signup from "../pages/Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
