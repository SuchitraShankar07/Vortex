import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventDetailsModal from './EventDetailsModel.js'; // Import the modal component

function EventSelectionPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event); // Set the selected event
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedEvent(null); // Clear the selected event
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', padding: '50px' }}>
      <h1 style={{ color: '#00aced', textAlign: 'center', fontSize: '3rem' }}>Vortex Events</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {events.map((event) => (
          <div
            key={event._id}
            style={{
              backgroundColor: '#333',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              width: '300px',
              margin: '0 auto',
            }}
            className='event-card'
          >
            <h3>{event.eventName}</h3>
            <p>{event.description}</p>
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
              className='register-button'
              onClick={() => openModal(event)} // Open modal on button click
            >
              Register
            </button>
          </div>
        ))}
      </div>

      {/* Render the modal if it's open */}
      {isModalOpen && selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
}

export default EventSelectionPage;
