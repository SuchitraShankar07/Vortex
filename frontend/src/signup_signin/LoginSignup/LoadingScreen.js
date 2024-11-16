import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <iframe 
        src="https://gifer.com/embed/LCPT" 
        width="480" 
        height="360" 
        frameBorder="0" 
        allowFullScreen
        title="Vortex Loading GIF"
        className="loading-gif"
      ></iframe>
      <p className="loading-text">
        <a href="https://gifer.com" target="_blank" rel="noopener noreferrer">Vortex Loading...</a>
      </p>
    </div>
  );
}

export default LoadingScreen;
