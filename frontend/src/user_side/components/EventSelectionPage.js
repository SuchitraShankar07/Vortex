import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EventSelectionPage() {
  const [events] = useState([
    { id: 1, name: 'Music Festival', description: 'An exciting day of live music performances!' },
    { id: 2, name: 'Tech Conference', description: 'A gathering of tech enthusiasts and professionals.' },
    { id: 3, name: 'Art Exhibition', description: 'An exhibition of modern and contemporary art.' },
  ]);

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', padding: '50px' }}>
      <h1 style={{ color: '#00aced', textAlign: 'center', fontSize: '3rem' }}>Vortex Events</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {events.map(event => (
          <div
            key={event.id}
            style={{
              backgroundColor: '#333',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              width: '300px', // Add width for uniform card size
              margin: '0 auto',
            }}
            className="event-card"
          >
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <Link to="/event" style={{ textDecoration: 'none', color: 'inherit' }}>
              <button
                style={{
                  backgroundColor: '#00aced',
                  color: '#ffffff',
                  padding: '12px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  fontSize: '1.1rem',
                }}
                className="register-button"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'; // Enlarge the button
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'; // Return to normal size
                }}
              >
                Register
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventSelectionPage;
