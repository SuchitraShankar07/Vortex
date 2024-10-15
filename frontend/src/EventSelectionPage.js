import React, { useState } from 'react';

function EventSelectionPage() {
  const [events] = useState([
    { id: 1, name: 'Music Festival', description: 'An exciting day of live music performances!' },
    { id: 2, name: 'Tech Conference', description: 'A gathering of tech enthusiasts and professionals.' },
    { id: 3, name: 'Art Exhibition', description: 'An exhibition of modern and contemporary art.' },
    { id: 4, name: 'Food Carnival', description: 'A celebration of food with diverse culinary options.' },
    { id: 5, name: 'Marathon', description: 'A marathon race for fitness enthusiasts.' },
  ]);

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', padding: '50px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', color: '#00aced' }}>Vortex</h1>
        <p>Choose from a variety of events happening around you!</p>
      </header>

      {/* Event Selection Section */}
      <div style={{ backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '10px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Available Events</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {events.map(event => (
            <div 
              key={event.id} 
              style={{
                backgroundColor: '#333',
                padding: '20px',
                borderRadius: '15px',
                width: '250px',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h3 style={{ color: '#00aced' }}>{event.name}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
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
