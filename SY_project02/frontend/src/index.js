import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
