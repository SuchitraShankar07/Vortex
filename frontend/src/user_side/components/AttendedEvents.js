
import React, { useState } from "react";
import "./EventList.css";

const events = [
  { id: 1, name: "Music Festival", date: "2024-06-15" },
  { id: 2, name: "Tech Conference", date: "2024-07-22" },
  { id: 3, name: "Art Workshop", date: "2024-08-10" },
];

function AttendedEvents() {
  const [activeTab, setActiveTab] = useState(events[0].id);

  const handleTabClick = (eventId) => {
    setActiveTab(eventId);
  };

  const handleGetCertificate = (eventId) => {
    window.location.href = `/certificate/${eventId}`;
  };

  return (
    <div className="event-list">
      <h2>Your Attended Events</h2>
      <div className="tabs">
        {events.map((event) => (
          <button
            key={event.id}
            className={`tab ${activeTab === event.id ? "active" : ""}`}
            onClick={() => handleTabClick(event.id)}
          >
            {event.name}
          </button>
        ))}
      </div>
      <div className="event-details">
        {events
          .filter((event) => event.id === activeTab)
          .map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <button
                onClick={() => handleGetCertificate(event.id)}
                className="certificate-button"
              >
                Get Certificate
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AttendedEvents;
