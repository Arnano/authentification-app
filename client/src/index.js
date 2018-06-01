import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import { Title } from "./components/Title";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Title} />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
