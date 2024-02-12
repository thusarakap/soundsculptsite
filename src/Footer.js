// Footer.js
import React from 'react';
import './resources/styles/navbarFooter.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 SoundSculpt. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
