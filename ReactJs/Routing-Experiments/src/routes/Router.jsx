import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Product from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />}>
        <Route
          path="/products/productdetails/:name"
          element={<ProductDetails />}
        />
      </Route>

      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
