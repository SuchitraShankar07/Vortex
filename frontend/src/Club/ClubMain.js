
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import HostEvent from './components/HostEvent';
import ReserveVenue from './components/ReserveVenue';
import ContactUs from './components/ContactUs';
import ViewEvents from './components/ViewEvents';
import ClubProfile from './components/ClubProfile';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MarkAttendance from './components/MarkAttendance';
import './ClubMain.css';

function ClubMain() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/host" element={<HostEvent onAddEvent={handleAddEvent} />} />
        <Route path="/view-events" element={<ViewEvents events={events} />} />
        <Route path="/venue" element={<ReserveVenue />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<ClubProfile />} />
        <Route path="/attendance" element={<MarkAttendance />} />
      </Routes>
    </div>
  );
}

export default ClubMain;