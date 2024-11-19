import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './components/HomePage'; 

function UserMain() {
  return (
    
      <div className="container">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>

  );
}

export default UserMain;
