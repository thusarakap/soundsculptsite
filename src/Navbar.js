// Navbar.js
import React from 'react';
import './resources/styles/navbarFooter.css';
import emailIcon from './resources/images/emailIcon.png';
import soundSculptLogo from './resources/images/soundSculptLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={soundSculptLogo} alt="Sound Sculpt Logo" />
      </div>
      <ul>
        
        
        <li><a href="/About">About</a></li>
        <li><a href="/Pricing">Pricing</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/Download">Download</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
      <div className="email">
        <img src={emailIcon} alt="Email Icon" />
        <a href="/Contact">support@soundsculpt.com</a>
        </div>
    </nav>
  );
};

export default Navbar;
