import React from 'react';
import { Link } from 'react-router-dom';
import './EventPage.css';

const EventPage = () => {
  return (
    <div className="main-container">
      <h1 className="vortex-title">Vortex</h1>
      
      <div className="event-page">
        <h2 className="event-title">College Fest 2023</h2>
        <p className="event-description">
          Join us for an exciting day full of activities, fun, and learning. The College Fest 2023 will feature various events, including music, art, and tech workshops!
        </p>
        
        <div className="event-details">
          <p><strong>Date:</strong> November 10, 2023</p>
          <p><strong>Time:</strong> 10:00 AM - 6:00 PM</p>
        </div>
        
        <Link to="/register">
          <button className="register-button">Register Now</button>
        </Link>
      </div>
    </div>
  );
};

export default EventPage;
