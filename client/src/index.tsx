import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "redux/store";
import { Provider } from "react-redux";

const element = document.getElementById("root");

if (!element) {
  throw new Error("Could not find root element");
}

const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
