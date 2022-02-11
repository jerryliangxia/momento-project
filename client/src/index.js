import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // have to install
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // now uses redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
