import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div
      id="home"
      style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        animation: 'fadeIn 1s ease-in-out',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          color: '#00aced',
          marginTop: '50px',
          fontWeight: 'bold',
          animation: 'textFadeIn 2s ease-out',
          transition: 'transform 0.3s ease, color 0.3s ease, text-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.2)';
          e.target.style.color = '#00bfa6'; 
          e.target.style.textShadow = '0 0 10px #00bfa6, 0 0 20px #00bfa6, 0 0 30px #00bfa6';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.color = '#00aced'; 
          e.target.style.textShadow = 'none';
        }}
      >
        Welcome to Vortex Events!
      </h1>
      <p
        style={{
          margin: '20px',
          fontSize: '1.2rem',
          lineHeight: '1.5',
          maxWidth: '800px',
          fontWeight: '300',
          animation: 'textFadeIn 2s ease-out',
        }}
      >
        We host exciting events for everyone! Browse through and register for your favorite event. 
        Let's make unforgettable memories together.
      </p>

      <div style={{ marginTop: '30px' }}>
        <Link to="/events">
          <button
            style={{
              backgroundColor: '#00aced',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.1rem',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
            }}
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

      <div style={{ marginTop: '50px' }}>
        <a href="#home">
          <button
            style={{
              backgroundColor: '#444',
              color: '#ffffff',
              padding: '10px 15px',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
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
  );
}

export default HomePage;

