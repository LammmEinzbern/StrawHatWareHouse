import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
