import React, { useState } from 'react';
import cashRegisterSound from './cash-register-kaching-sound-effect-125042.mp3'; 

function EventDetailsModal({ event, onClose }) {
  const [isRegistered, setIsRegistered] = useState(false);


  const handleAttendClick = () => {
    const audio = new Audio(cashRegisterSound); 
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

        
        {!isRegistered ? (
          <button onClick={handleAttendClick} style={attendButtonStyles}>
            Attend Event
          </button>
        ) : (
          <p style={registeredTextStyles}>Registered</p> 
          <p style={registeredTextStyles}>Registered</p> 
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
