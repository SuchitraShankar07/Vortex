import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>About</p>
      <p>Contact Us</p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
