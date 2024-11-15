import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure the Navbar component is present in the correct path
import HomePage from './components/HomePage'; // Ensure the HomePage component is present in the correct path
import EventSelectionPage from './components/EventSelectionPage'; // Event selection page route
import EventRegistration from './components/EventRegistration'; // Event registration page route
import AttendancePage from './components/AttendancePage'; // Attendance page route

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar /> {/* Navbar component appears on all pages */}
        <Routes>
          {/* HomePage route */}
          <Route path="/" element={<HomePage />} />

          {/* EventSelectionPage route */}
          <Route path="/events" element={<EventSelectionPage />} />

          {/* EventRegistration route */}
          <Route path="/event" element={<EventRegistration />} />

          {/* AttendancePage route */}
          <Route path="/attendance" element={<AttendancePage />} />

          {/* You can add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
