import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div>
    <Link to="/about-us">About Us</Link>
    <Link to="/terms-and-conditions">terms and conditions</Link>
  </div>
);

Footer.defaultProps = {};

export default Footer;
