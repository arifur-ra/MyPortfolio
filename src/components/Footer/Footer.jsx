import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div></div>
      <div className="footer-content">
        <p> &#169; copywrite @ 2021 created and design by ararif</p>
      </div>
      <div className="footer-logo">
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
