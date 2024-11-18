import React, { useState, useEffect } from "react";

const ViewEvents = () => {
  // State variables
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    campus: "",
    venue: "",
    date: "",
    organizer: "",
  });
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null);     // To track error state

  // Fetch events from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data.data.events || []); // Adjust based on backend response
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Start editing an event
  const handleEdit = (event) => {
    setEditingEvent(event._id);
    setFormData({
      eventName: event.eventName,
      description: event.description,
      campus: event.campus,
      venue: event.venue,
      date: event.date.slice(0, 10), // Format date for input field
      organizer: event.organizer,
    });
  };

  // Update an event
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/events/${editingEvent}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update event");
      }

      const updatedEvent = await response.json();
      alert("Event updated successfully!");
      setEvents((prev) =>
        prev.map((event) =>
          event._id === editingEvent ? { ...event, ...updatedEvent } : event
        )
      );
      setEditingEvent(null);
      setFormData({
        eventName: "",
        description: "",
        campus: "",
        venue: "",
        date: "",
        organizer: "",
      });
    } catch (err) {
      console.error("Error updating event:", err);
      alert("Failed to update event.");
    }
  };

  // Delete an event
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/events/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete event");
        }

        alert("Event deleted successfully!");
        setEvents((prev) => prev.filter((event) => event._id !== id));
      } catch (err) {
        console.error("Error deleting event:", err);
        alert("Failed to delete event.");
      }
    }
  };

  // Render loading or error messages
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Main render
  return (
    <div className="manage-events">
      <h2>Manage Events</h2>
      {editingEvent ? (
        <form className="edit-form" onSubmit={handleUpdate}>
          <h3>Edit Event</h3>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            placeholder="Event Name"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="campus"
            value={formData.campus}
            onChange={handleInputChange}
            placeholder="Campus"
            required
          />
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
            placeholder="Venue"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleInputChange}
            placeholder="Organizer"
            required
          />
          <button type="submit">Update Event</button>
          <button type="button" onClick={() => setEditingEvent(null)}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="event-list">
          {events.map((event) => (
            <div key={event._id} className="event-card">
              <h3>{event.eventName}</h3>
              <p>{event.description}</p>
              <p>
                <strong>Campus:</strong> {event.campus}
              </p>
              <p>
                <strong>Venue:</strong> {event.venue}
              </p>
              <p>
                <strong>Date:</strong> {new Date(event.date).toDateString()}
              </p>
              <p>
                <strong>Organizer:</strong> {event.organizer}
              </p>
              <button onClick={() => handleEdit(event)}>Edit</button>
              <button onClick={() => handleDelete(event._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewEvents;
