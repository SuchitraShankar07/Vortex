import React, { useState } from 'react';

function EventDetailsModal({ event, onClose }) {
  const [isRegistered, setIsRegistered] = useState(false);

  // Function to handle the "Attend Event" button click
  const handleAttendClick = () => {
    // Play sound when the button is clicked
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav'); // URL of the beep sound
    audio.play();

    // Set the "Registered" text on the screen
    setIsRegistered(true);
  };

  return (
    <div style={modalOverlayStyles}>
      <div style={modalContentStyles}>
        <button style={closeButtonStyles} onClick={onClose}>X</button>
        <h2>{event.eventName}</h2>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Campus:</strong> {event.campus}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Organizer:</strong> {event.organizer}</p>

        {/* Attend Event Button */}
        {!isRegistered ? (
          <button onClick={handleAttendClick} style={attendButtonStyles}>
            Attend Event
          </button>
        ) : (
          <p style={registeredTextStyles}>Registered</p> // Display "Registered" when clicked
        )}

        <button onClick={onClose} style={closeButtonStyles}>Close</button>
      </div>
    </div>
  );
}

const modalOverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  width: '400px',
  textAlign: 'center',
  position: 'relative',
  color: 'black',
};

const closeButtonStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'red',
  color: 'black',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  borderRadius: '50%',
};

const attendButtonStyles = {
  backgroundColor: 'green',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '15px',
};

const registeredTextStyles = {
  marginTop: '15px',
  color: 'green',
  fontWeight: 'bold',
};

export default EventDetailsModal;
