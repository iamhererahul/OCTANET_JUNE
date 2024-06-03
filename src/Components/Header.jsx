import React from "react";
import "../App.css";
import Logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className="header" data-aos="fade-down" data-aos-duration="1000">
        <img src={Logo} alt="logo" />
        <div className="nav_items">
          <div className="nav-item">
            <div className="list">
              <ul>
                <li>Home</li>
                <li>Internship</li>
                <li>Certificate Verification</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Header;
