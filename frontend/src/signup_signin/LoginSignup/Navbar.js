import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Welcome to Vortex!</h1>
      <a href="/contact" className="contact-link">Contact Us</a>
    </nav>
  );
}

export default Navbar;
