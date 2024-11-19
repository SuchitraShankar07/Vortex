import React, { useState, useEffect } from 'react';
import './HostEvent.css'; 
import { useNavigate } from 'react-router-dom';

const HostEvent = () => {
  const [eventName, setEventName] = useState('');
  const [clubName, setClubName] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [campus, setCampus] = useState('Ecity');
  const [venue, setVenue] = useState('Seminar Hall 1');
  const navigate = useNavigate();

  useEffect(() => { const storedProfile = localStorage.getItem('clubProfile'); 
    if (storedProfile) { 
      const profile = JSON.parse(storedProfile); 
      setClubName(profile.clubName); 
    } }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      eventName,
      description,
      campus,
      venue,
      date: dateTime, 
      organizer: clubName, 
    };
  
    try {
      
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create event");
      }
  

      setEventName("");
      setDescription("");
      setCampus("Ecity");
      setVenue("Seminar Hall 1");
      setDateTime("");
      setClubName("");
  
  
      navigate("/view-events");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  

  return (
    <div className="host-event">
      <h1>Host Your Event</h1>
      <form className="event-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Event Name:</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Club Name:</label>
            <input
              type="text"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group description">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-row-date-time">
          <div className="form-group">
            <label>Date & Time:</label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Campus:</label>
            <select
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
              required
            >
              <option value="RR">RR Campus</option>
              <option value="Ecity">Ecity Campus</option>
            </select>
          </div>
        </div>

        <div className="form-row-venue">
          <div className="form-group">
            <label>Venue:</label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              list="venues"
              required
            />
            <datalist id="venues">
              <option value="Seminar Hall 1" />
              <option value="Seminar Hall 2" />
              <option value="Seminar Hall 3" />
              <option value="MRD Auditorium" />
              <option value="CIE Room" />
            </datalist>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Event</button>
      </form>
    </div>
  );
};

export default HostEvent;
