import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => (
  <Link to="/">
    <img
      className="logo"
      src="https://drive.google.com/uc?export=view&id=1d3o9sOOiobgOEh7HWiCJBOHKTsmXopTX"
      alt="just cinemas"
    />
  </Link>
);

Header.defaultProps = {};

export default Header;
