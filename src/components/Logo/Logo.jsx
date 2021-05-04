import React from "react";
import LogoImage from "../../assets/logo1.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="navbar-brand">
      <a href="#">
        <img className="logo" src={LogoImage} alt="Logo...." />
      </a>
    </div>
  );
};

export default Logo;
