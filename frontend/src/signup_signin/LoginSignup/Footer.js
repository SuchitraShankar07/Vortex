import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/contact" className="footer-link">Contact Us</a>
        <a href="https://www.instagram.com/neranjana._/" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com/in/suchitra-shankar-858958293/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p className="footer-text">© 2024 Vortex. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
