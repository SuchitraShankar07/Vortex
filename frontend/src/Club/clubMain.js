import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure 'Navbar' is correctly imported
import Home from './components/Home';
import HostEvent from './components/HostEvent';
import ReserveVenue from './components/ReserveVenue';
import ContactUs from './components/ContactUs';
import ViewEvents from './components/ViewEvents';
import ClubProfile from './components/ClubProfile';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './clubMain.css';

function clubMain() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar appears on all pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default Route */}
          <Route path="/home" element={<Home />} />
          <Route path="/host" element={<HostEvent onAddEvent={handleAddEvent} />} />
          <Route path="/view-events" element={<ViewEvents events={events} />} />
          <Route path="/venue" element={<ReserveVenue />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<ClubProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default clubMain;
