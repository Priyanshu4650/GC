import React from "react";
import { Link } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import "../styles/Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Useful Links */}
        <div>
          <h3>USEFUL LINKS</h3>
          <ul className="footer-links">
            <li>
              <Link to="https://iitpkd.ac.in">IIT Palakkad</Link>
            </li>
            <li>
              <Link to="https://docs.google.com/document/d/1AGj8LifA9gSygQsDY0wWllNdyTcvbmGa/edit?usp=sharing">
                RuleBook
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p>IIT Palakkad, Kanjikode</p>
          <p>Palakkad, Kerala - 678623</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>CONNECT WITH US</h3>
          <a
            href="https://www.instagram.com/gc_iitpkd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagramAlt className="footer-social-icon" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/@SportsIITPKD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="footer-social-icon" />
            <span>YouTube</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 GC IIT Palakkad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
