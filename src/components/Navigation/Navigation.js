import React from "react";
import Agrologo from "../../images/Agrologo.png";
import Search from "../Search/Searchinput";
import "./nav.css"

function Navigation() {
  return (
    <div>
      <nav className="nav-container">
        <img src={Agrologo} alt="" />
        <Search/>
        <div className="vertical-line"/>
        <div className="nav-text">
        <p>Home Delivery</p>
        <h5>Enter Your Delivery Address</h5>
        </div>
        <button>Login</button>
        <button>Sign Up</button>
      </nav>
    </div>
  );
}

export default Navigation;
