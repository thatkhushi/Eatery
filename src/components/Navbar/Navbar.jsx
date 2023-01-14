import React from "react";
import "./Navbar.css";
import smallLogo from "../../assets/smallLogo.png";
import search_icon from "../../assets/search-icon.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav__content">
        <Link to='/' className="nav__content-logo_wrapper">
        <img src={smallLogo} className="nav__content-logo" /></Link>
        <div className="nav__container">
        <div className="nav__search-box">
          <img src={search_icon} className="nav__search-icon" />
          <input
            placeholder="Search for a canteen or a dish"
            className="nav__search-box-input"
          ></input>
        </div>
        <Link to='/cart' className="nav__cart">
          <img src={cart} className="nav__cartimage" />
          <p>Cart</p>
        </Link>
       
        <Link to="/auth" className="nav__login-link">
          Login
        </Link>
        <p className="nav__profile">K</p></div>
      </div>
    </div>
  );
};

export default Navbar;
