// ViewEvents.js
import React from 'react';
import './ViewEvents.css';

const ViewEvents = ({ events }) => {
  return (
    <div className="view-events">
      <h2>All Events</h2>
      {events.length === 0 ? (
        <p>No events yet. Please create one.</p>
      ) : (
        <div className="event-list">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.eventName}</h3>
              <p><strong>Club:</strong> {event.clubName}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Date & Time:</strong> {event.dateTime}</p>
              <p><strong>Campus:</strong> {event.campus}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              {event.eventImage && <img src={event.eventImage} alt={event.eventName} className="event-image" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewEvents;
