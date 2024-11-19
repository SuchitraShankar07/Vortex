import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Vortex</div>
      <div className="nav-links">
        
        <Link to="/user/dashboard"><b>HOME</b></Link>
        <Link to="/events">Events</Link>
        <Link to="/attended-events">Attended Events</Link>
        <Link to="/details">Details</Link>
        <Link to="/attendance">Log In Attendance</Link>
      </div>
    </div>
  );
}

export default Navbar;

