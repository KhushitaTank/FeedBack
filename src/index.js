import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

//ReactDOM.createRoot(document.getElementById("root")).render(<h1>App</h1>);
const domNode = document.getElementById("root"); //domNode: A DOM element. React will create a root for this DOM element
//and allow you to call functions on the root, such as render to display rendered React content.
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
