import React from "react";
import {FaLinkedin, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs";
import "./footer.css"

function Footer() {
  return (
    <div>
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
            <h5>Agromobile</h5>
                <span>About Us</span>
                <span>Blog</span>
                <span>Career</span>
                <span>Suppliers</span>
                <span>Food Safety</span>
            </div>
            <div className="col-12 col-md-4">
            <h5>Help</h5>
            <span>Contact Us</span>
            <span>Delivery Information</span>
            <span>Support</span>
            <span>FAQs</span>
            <span>Partners</span>
            <span>Terms Of Service</span>
            </div>
            <div className="col-12 col-md-4">
            <h5>Agromobile</h5>
                <span className="icons"><FaLinkedin />  LinkedIn</span>
                <span className="icons"><BsTwitterX />  Twitter</span>
                <span className="icons"><FaFacebookF />  Facebook</span>
                <span className="icons"><FaYoutube />  Youtube</span>
                <span className="icons"><FaInstagram />  Instagram</span>
            </div>
            <hr/>
            <p>&copy; Agromobile 2024, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
