import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure 'Navbar' is correctly imported
import Home from './components/Home';
import HostEvent from './components/HostEvent';
import ReserveVenue from './components/ReserveVenue';
import ContactUs from './components/ContactUs';
import ViewEvents from './components/ViewEvents';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './clubMain.css';

function clubMain() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/host" element={<HostEvent />}/>
          <Route path="/view" element={<ViewEvents />} />
          <Route path="/venue" element={<ReserveVenue />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default clubMain;
