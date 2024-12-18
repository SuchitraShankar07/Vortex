import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Import Navbar component
import "./ViewEvents.css"; // Assume a CSS file exists for styling

const ViewEvents = () => {
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events
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

  // Input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Reset form
  const resetForm = () => {
    setEditingEvent(null);
    setFormData({
      eventName: "",
      description: "",
      campus: "",
      venue: "",
      date: "",
      organizer: "",
    });
  };

  // Edit event
  const handleEdit = (event) => {
    setEditingEvent(event._id);
    setFormData({
      eventName: event.eventName,
      description: event.description,
      campus: event.campus,
      venue: event.venue,
      date: event.date.slice(0, 10),
      organizer: event.organizer,
    });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Editing event ID:", editingEvent);
    console.log("Form data:", formData);
    try {
      console.log(editingEvent);
      const response = await fetch(`http://localhost:5000/api/events/${editingEvent}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error(`Failed to update event: ${response.statusText}`);
      }
      const updatedEvent = await response.json();
      alert("Event updated successfully!");
      setEvents((prev) =>
        prev.map((event) =>
          event._id === editingEvent ? updatedEvent.event : event
        )
      );
      resetForm();
    } catch (err) {
      alert("Failed to update event: " + err.message);
    }
  };
  
  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this event?")) {
  //     // Optimistically update UI
  //     setEvents((prev) => prev.filter((event) => event._id !== id));
  
  //     try {
  //       const response = await fetch(`http://localhost:5000/api/events/${id}`, {
  //         method: "DELETE",
  //       });
  
  //       if (response.status === 404) {
  //         alert("Event not found!");
  //         return;
  //       }
  
  //       if (!response.ok) {
  //         throw new Error(`Failed to delete event: ${response.statusText}`);
  //       }
  
  //       alert("Event deleted successfully!");
  //     } catch (err) {
  //       alert("Error deleting event: " + err.message);
  //       // Rollback optimistic update on error
  //       setEvents((prev) => [...prev, events.find((event) => event._id === id)]);
  //     }
  //   }
  // };
  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        setLoading(true); // Set loading state to show a spinner or something
        const response = await fetch(`http://localhost:5000/api/events/${id}`, {
          method: "DELETE",
        });
  
        if (response.status === 404) {
          alert("Event not found!");
          setLoading(false);
          return;
        }
  
        if (!response.ok) {
          throw new Error(`Failed to delete event: ${response.statusText}`);
        }
  
        alert("Event deleted successfully!");
        // Update UI after successful deletion from the server
        setEvents((prev) => prev.filter((event) => event._id !== id));
      } catch (err) {
        alert("Error deleting event: " + err.message);
      } finally {
        setLoading(false); // Remove loading indicator after success or failure
      }
    }
  };
  // Loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Render
  return (
    <div>
      <Navbar /> {/* Include the Navbar */}
      <div className="manage-events">
        <h2>Manage Events</h2>
        {editingEvent ? (
          <form onSubmit={handleUpdate}>
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
            <button type="submit">Update</button>
            <button type="button" onClick={resetForm}>
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
    </div>
  );
};

export default ViewEvents;
