import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {  // Make sure this is uppercase
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="Vortex Logo" className="logo" />
        <h2>Vortex</h2>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/host">Host Event</Link>
        <Link to="/view">View Events</Link> {/* Link to Host Event page */}
        <Link to="/venue">Reserve Venue</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <button className="nav-toggle" onClick={toggleNavbar}>
        <span className="toggle-icon">{isOpen ? 'X' : '☰'}</span>
      </button>
    </nav>
  );
};

export default Navbar; // Make sure this is capitalized
