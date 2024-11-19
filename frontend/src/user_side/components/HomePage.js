import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
    

      {/* Homepage Content */}
      <div className="content">
        <h1 
          className="title" 
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.2)';
            e.target.style.color = '#00bfa6';
            e.target.style.textShadow = '0 0 10px #00bfa6, 0 0 20px #00bfa6, 0 0 30px #00bfa6';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = '#00bfa6';
            e.target.style.textShadow = 'none';
          }}
        >
          Welcome to Vortex Events!
        </h1>
        <p className="description">
          We host exciting events for everyone! Browse through and register for your favorite event. 
          Let's make unforgettable memories together.
        </p>

        <div className="button-group">
          <Link to="/events">
            <button 
              className="btn explore"
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
              }}
            >
              Explore Events
            </button>
          </Link>
        </div>

        <div className="button-group">
          <a href="#home">
            <button 
              className="btn back-to-top"
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.backgroundColor = '#00aced';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = '#444';
              }}
            >
              Back to Top
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
