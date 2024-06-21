import React from "react";
import Agrologo from "../../images/Agrologo.png";
import Search from "../Search/Searchinput";
import "./nav.css";

function Navigation() {
  return (
    <div className="desktop_navigation">
    <div className="nav-container" >
    <nav >
        <img src={Agrologo} alt="" />
        <Search/>
        <div className="nav-text">
        <p>Home Delivery</p>
        <h5>Enter Your Delivery Address</h5>
        </div>
        <div className="btn-container">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign-Up</button>
        </div>
      </nav>
    </div>
    </div>
  );
}

export default Navigation;
