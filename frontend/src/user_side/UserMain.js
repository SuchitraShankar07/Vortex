import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './components/HomePage'; 
import EventSelectionPage from './components/EventSelectionPage'; 
import EventRegistration from './components/EventRegistration'; 
import AttendancePage from './components/AttendancePage'; 
import 'UserMain.css'
function UserMain() {
  return (
    <Router>
      <div className="container">
        <Navbar /> 
        <Routes>
          {/* HomePage route */}
          <Route path="/" element={<HomePage />} />

          {/* EventSelectionPage route */}
          <Route path="/events" element={<EventSelectionPage />} />

          {/* EventRegistration route */}
          <Route path="/event" element={<EventRegistration />} />

          {/* AttendancePage route */}
          <Route path="/attendance" element={<AttendancePage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default UserMain;
