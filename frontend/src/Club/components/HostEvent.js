import React, { useState } from 'react';
import './HostEvent.css'; // Assuming you will create styles for the form

const HostEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    clubName: '',
    description: '',
    time: '',
    date: '',
    campus: 'RR', // Default campus value
    venue: 'Seminar Hall 1', // Default venue
    image: null, // Default image is null
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Store the selected file
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., save to database or display alert
    alert('Event submitted successfully!');
  };

  return (
    <div className="host-event">
      <h1>Host an Event</h1>
      <form onSubmit={handleSubmit} className="event-form">
        {/* Event Name */}
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Club Name */}
        <div className="form-group">
          <label htmlFor="clubName">Club Name</label>
          <input
            type="text"
            id="clubName"
            name="clubName"
            value={formData.clubName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Event Description */}
        <div className="form-group">
          <label htmlFor="description">Event Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Event Date and Time */}
        <div className="form-group">
          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Event Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campus Dropdown */}
        <div className="form-group">
          <label htmlFor="campus">Campus</label>
          <select
            id="campus"
            name="campus"
            value={formData.campus}
            onChange={handleChange}
            required
          >
            <option value="RR">RR</option>
            <option value="Ecity">Ecity</option>
          </select>
        </div>

        {/* Venue Dropdown or Input */}
        <div className="form-group">
          <label htmlFor="venue">Venue</label>
          <select
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          >
            <option value="Seminar Hall 1">Seminar Hall 1</option>
            <option value="Seminar Hall 2">Seminar Hall 2</option>
            <option value="Seminar Hall 3">Seminar Hall 3</option>
            <option value="MRD Auditorium">MRD Auditorium</option>
            <option value="CIE Room">CIE Room</option>
            <option value="Other">Other</option>
          </select>
          {formData.venue === 'Other' && (
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Type custom venue"
            />
          )}
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label htmlFor="image">Event Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit Event
        </button>
      </form>
    </div>
  );
};

export default HostEvent;
