import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Company Info */}
        <div className="footer-column">
          <img src={assets.logo2} alt="" className="logo" />
        </div>

        {/* Column 2 - Most selled Food Items */}
        <div className="footer-column">
          <h4>Best Seller</h4>
          <ul>
            <li>Salad</li>
            <li>Pasta</li>
            <li>Rolls</li>
            <li>Cup Cake</li>
          </ul>
        </div>

        {/* Column 3 - Opening Hours */}
        <div className="footer-column">
          <h4>Opening Hours</h4>
          <ul className="opening-hours">
            <li>
              <span>Monday</span>
              <span>11:00 - 18:00</span>
            </li>
            <li>
              <span>Tuesday</span>
              <span>11:00 - 18:00</span>
            </li>
            <li>
              <span>Wednesday</span>
              <span>11:00 - 18:00</span>
            </li>
            <li>
              <span>Thursday</span>
              <span>11:00 - 18:00</span>
            </li>
            <li>
              <span>Friday</span>
              <span>11:00 - 18:00</span>
            </li>
            <li>
              <span>Saturday</span>
              <span>11:00 - 18:00</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="footer-column">
          <h4>CONTACT</h4>
          <ul className="contact-info">
            <li>
              <FaHome className="icon" /> New Delhi, Chandni Chowk, India
            </li>
            <li>
              <FaEnvelope className="icon" /> doorsashinfo@gmail.com
            </li>
            <li>
              <FaPhone className="icon" /> +91 7735625295
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="footer-bottom">
        <p>© 2025 Copyright: AbhijeetBhaiDoordash.com</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaGoogle />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
