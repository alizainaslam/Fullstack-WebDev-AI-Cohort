import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MoodContext from "./context/MoodContext.jsx";

createRoot(document.getElementById("root")).render(
    <MoodContext>
        <App />
    </MoodContext>
);
