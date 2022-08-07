import { createRoot } from "react-dom/client";
import App from "./App";
import "Assets/Css/style.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
