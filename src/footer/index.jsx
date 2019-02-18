import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => (
  <div className="footer-wrapper">
    <Link className="footer-links" to="/about-us">
      About Us
    </Link>
    <Link className="footer-links" to="/terms-and-conditions">
      Terms and conditions
    </Link>
  </div>
);

Footer.defaultProps = {};

export default Footer;
