import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventDetailsModal from './EventDetailsModel.js'; // Import the modal component

function EventSelectionPage() {
  const [events, setEvents] = useState([]); // State to store events
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store selected event
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Fetch events when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data.data.events || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
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

      {/* Render events only if available */}
      {Array.isArray(events) && events.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {events.map((event) => {
            console.log('Rendering event:', event); // Check each event structure
            return (
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
                className="event-card"
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
                  className="register-button"
                  onClick={() => openModal(event)} // Open modal on button click
                >
                  Register
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No events available</div>
      )}

      {/* Render the modal if it's open */}
      {isModalOpen && selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
}

export default EventSelectionPage;
