import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "modern-normalize/modern-normalize.css";
import "./styles/styles.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
