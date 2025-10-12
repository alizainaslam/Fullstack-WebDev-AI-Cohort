import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App";
import RecipeContext from "./context/RecipeContext";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <RecipeContext>
        <App />
      </RecipeContext>
    </BrowserRouter>
    <ToastContainer position="top-center" autoClose={2000} />
  </>
);
