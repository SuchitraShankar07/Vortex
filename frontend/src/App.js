import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventSelectionPage from './EventSelectionPage';
import EventPage from './EventPage';
import EventRegistration from './EventRegistration';

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

