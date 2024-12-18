import React, { useState, useEffect } from 'react';
import EventDetailsModal from './EventDetailsModel.js';
import Navbar from './Navbar.js';
import registerSound from './cash-register-kaching-sound-effect-125042.mp3'; // Import the MP3 file

function EventSelectionPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState(new Set());

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
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
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const toggleRegister = (eventId) => {
    const sound = new Audio(registerSound); // Create an Audio instance

    setRegisteredEvents((prev) => {
      const updated = new Set(prev);
      if (updated.has(eventId)) {
        updated.delete(eventId);
      } else {
        updated.add(eventId);
        sound.play(); // Play sound on registering
      }
      return updated;
    });
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: '#121212',
          color: '#ffffff',
          minHeight: '100vh',
          padding: '50px',
        }}
      >
        <h1
          style={{
            color: '#00aced',
            textAlign: 'center',
            fontSize: '3rem',
          }}
        >
          Vortex Events
        </h1>

        {Array.isArray(events) && events.length > 0 ? (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {events.map((event) => {
              const isRegistered = registeredEvents.has(event._id);
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
                      backgroundColor: isRegistered ? '#28a745' : '#00aced',
                      color: '#ffffff',
                      padding: '12px 20px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                      fontSize: '1.1rem',
                    }}
                    className="register-button"
                    onClick={() => toggleRegister(event._id)}
                  >
                    {isRegistered ? 'Registered' : 'Register'}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No events available</div>
        )}

        {isModalOpen && selectedEvent && (
          <EventDetailsModal event={selectedEvent} onClose={closeModal} />
        )}
      </div>
    </div>
  );
}

export default EventSelectionPage;
