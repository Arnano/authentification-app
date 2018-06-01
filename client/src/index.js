import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Signup from "./components/auth/Signup";
import { Title } from "./components/Title";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Title} />
      <Route path="/signup" component={Signup} />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
