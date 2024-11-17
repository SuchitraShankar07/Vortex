import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './components/HomePage'; 
// import './UserMain.css'
function UserMain() {
  return (
    
      <div className="container">
        <Navbar /> 
        <Routes>
          {/* HomePage route */}
          <Route path="/" element={<HomePage />} />

        </Routes>
      </div>

  );
}

export default UserMain;
