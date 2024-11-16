import React, { useState } from 'react';
import './HostEvent.css'; // Assuming you will create styles for the form
import { useNavigate } from 'react-router-dom';

const HostEvent = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [clubName, setClubName] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [campus, setCampus] = useState('RR');
  const [venue, setVenue] = useState('Seminar Hall 1');
  const [eventImage, setEventImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      eventName,
      clubName,
      description,
      dateTime,
      campus,
      venue,
      eventImage: URL.createObjectURL(eventImage),
    };

    onAddEvent(newEvent);  // Pass the event to parent component

    // Clear form
    setEventName('');
    setClubName('');
    setDescription('');
    setDateTime('');
    setCampus('RR');
    setVenue('Seminar Hall 1');
    setEventImage(null);

    // Navigate to View Events page
    navigate('/view-events');
  };

  return (
    <div className="host-event">
      <h1>Host Your Event</h1>
      <form className="event-form" onSubmit={handleSubmit}>
        {/* Row 1 - Event Name and Club Name */}
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

        {/* Row 2 - Description */}
        <div className="form-group description">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Row 3 - Date & Time and Campus */}
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

        {/* Row 4 - Venue and Image Upload */}
        <div className="form-row-venue-image">
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
          <div className="form-group">
            <label>Event Image:</label>
            <input
              type="file"
              onChange={(e) => setEventImage(e.target.files[0])}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Event</button>
      </form>
    </div>
  );
};

export default HostEvent;
