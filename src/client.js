import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createStore from "./app/redux/create-store";
import App from "./app";

import "./app/styles/index.css";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);