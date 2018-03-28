import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to={`/`} className="navbar-brand">
        NewYork Times News
      </Link>
    </nav>
  );
};

export default Header;
