import React, { Component } from "react";
import withAuth from "./withAuth";

class Feature extends Component {
  render() {
    return (
      <div>
        <h2> Feature page, accessible once loged in </h2>
      </div>
    );
  }
}

export default withAuth(Feature);
