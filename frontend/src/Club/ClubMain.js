
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ClubMain.css';

function ClubMain() {


  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />

       
      </Routes>
    </div>
  );
}

export default ClubMain;