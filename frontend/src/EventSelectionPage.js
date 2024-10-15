// EventSelectionPage.js
import React, { useState } from 'react';

function EventSelectionPage() {
  const [events] = useState([
    { id: 1, name: 'Music Festival' },
    { id: 2, name: 'Tech Conference' },
    { id: 3, name: 'Art Exhibition' },
    { id: 4, name: 'Food Carnival' },
    { id: 5, name: 'Marathon' },
  ]);

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', padding: '50px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', color: '#00aced' }}>Vortex</h1>
        <p>Choose from a variety of events happening around you!</p>
      </header>

      {/* Event Selection Section */}
      <div style={{ backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Select an Event</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {events.map(event => (
            <li key={event.id} style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
              <a href="#" style={{ color: '#00aced', textDecoration: 'none' }}>{event.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <footer style={{ textAlign: 'center', marginTop: '50px', padding: '20px', backgroundColor: '#121212' }}>
        <a href="#" style={{ margin: '0 10px', color: '#00aced' }}>About</a>
        <a href="#" style={{ margin: '0 10px', color: '#00aced' }}>Contact Us</a>
        <div style={{ marginTop: '10px' }}>
          <a href="#" style={{ margin: '0 5px', color: '#00aced' }}><i className="fab fa-linkedin"></i></a>
          <a href="#" style={{ margin: '0 5px', color: '#00aced' }}><i className="fab fa-twitter"></i></a>
          <a href="#" style={{ margin: '0 5px', color: '#00aced' }}><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default EventSelectionPage;
