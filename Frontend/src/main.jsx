import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { LoginProvider } from "./context/LoginContext.jsx";
import { BookProvider } from "./context/BookContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <BookProvider>
      <App />
    </BookProvider>
  </LoginProvider>
);