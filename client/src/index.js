import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import { Title } from "./components/Title";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Title} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
