<<<<<<< HEAD
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import ContactPage from './components/ContactPage/ContactPage';
import Register from './components/UserLogin/Register';
import './App.css';
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventSelectionPage from './EventSelectionPage';
import EventPage from './EventPage';
import EventRegistration from './EventRegistration';
>>>>>>> 275f9c8f84f247809ede0a4ea66ea7cbbc651a21

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EventSelectionPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/register" element={<EventRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

