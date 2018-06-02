import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route } from "react-router-dom";

import reducers from "./reducers";
import App from "./components/App";
import Signup from "./components/auth/Signup";
import { Title } from "./components/Title";

const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Title} />
        <Route path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
