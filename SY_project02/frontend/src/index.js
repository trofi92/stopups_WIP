import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
// https://xtring-dev.tistory.com/entry/Reactjs-%EC%BD%94%EB%93%9C-%EB%B6%84%ED%95%A0Code-Splitting-React-%EB%8D%94-%EC%9E%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
