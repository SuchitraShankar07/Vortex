import React from 'react';
import './App.css';
import LoginPage from './signup_signin/LoginPage'; // Adjust the path as needed
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserRegister from './signup_signin/Components/UserRegister';
import ClubRegister from './signup_signin/Components/ClubRegister';
// import UserDashboard from './signup_signin/Components/UserDashboard';
import ClubMain from './Club/ClubMain';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* LoginPage will render only on "/" */}
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/club/register" element={<ClubRegister />} />
          {/* <Route path="/user/dashboard" element={<UserDashboard />} /> */}
          <Route path="/club/dashboard" element={<ClubMain />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
