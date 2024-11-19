import React from 'react';
import { Link } from 'react-router-dom';
import './../../Club/components/Navbar.css';

function Navbar() {
  return (
    <div className="navbar1">
      <div className="nav-links">

        <Link to="/user/dashboard"><b>Home</b></Link>
        <Link to="/events">Events</Link>
      
        <Link to="/attendance">Log In Attendance</Link>
        <Link to="/user/profile">Profile</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;

