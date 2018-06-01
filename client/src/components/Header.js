import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Redux Auth </Link>
        <Link to="/signup"> Sign up </Link>
        <Link to="/signin"> Sign in </Link>
        <Link to="/signout"> Sign out </Link>
        <Link to="/signout"> Feature page </Link>
      </div>
    );
  }
}
