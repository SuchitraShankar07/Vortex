import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './signup_signin/LoginPage';
import UserRegister from './signup_signin/Components/UserRegister';
import ClubRegister from './signup_signin/Components/ClubRegister';
import UserMain from './user_side/UserMain';
import ClubMain from './Club/ClubMain';
import HostEvent from './Club/components/HostEvent';
import ViewEvents from './Club/components/ViewEvents';
import ReserveVenue from './Club/components/ReserveVenue';
import ContactUs from './Club/components/ContactUs';
import ClubProfile from './Club/components/ClubProfile';
import MarkAttendance from './Club/components/MarkAttendance';
import AttendedEvents from './user_side/components/AttendedEvents';
import EventSelectionPage from './user_side/components/EventSelectionPage';
import EventRegistration from './user_side/components/EventRegistration';
import AttendancePage from './user_side/components/AttendancePage';
import EventDetailsModal from './user_side/components/EventDetailsModel';
import Details from './user_side/components/Details';
const App = () => {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/club/register" element={<ClubRegister />} />
          <Route path="/user/dashboard" element={<UserMain />} />
          <Route path="/club/dashboard" element={<ClubMain />} />
          <Route path="/host-event" element={<HostEvent onAddEvent={handleAddEvent} />} />
          <Route path="/view-events" element={<ViewEvents events={events} />} />
          <Route path="/venue" element={<ReserveVenue />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<ClubProfile />} />
          <Route path="/attendance/check" element={<MarkAttendance />} />
          <Route path="/events" element={<EventSelectionPage />} />
          <Route path="/event/register" element={<EventRegistration />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/attended-events" element={<AttendedEvents />} />
          <Route path="/EventDetailsModal" element={<EventDetailsModal />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
