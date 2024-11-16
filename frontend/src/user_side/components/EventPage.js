import React from 'react';
import { Link } from 'react-router-dom';

const EventPage = () => (
  <div style={{ backgroundColor: '#121212', color: '#e0e0e0', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
    <h1 style={{ color: '#007bff' }}>Vortex Event</h1>
    <h2>College Fest 2023</h2>
    <p>Join us for an exciting day full of activities, fun, and learning.</p>
    <Link to="/register">
      <button style={{ backgroundColor: '#00aced', padding: '10px 20px', color: '#ffffff', borderRadius: '5px' }}>Register Now</button>
    </Link>
  </div>
);

export default EventPage;
