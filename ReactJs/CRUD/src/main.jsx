import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import Wrapper from "./context/Wrapper.jsx";

createRoot(document.getElementById("root")).render(
  <Wrapper>
    <App />
  </Wrapper>
);
