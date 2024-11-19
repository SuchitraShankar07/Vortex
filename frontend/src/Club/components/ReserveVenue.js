import React, { useEffect } from 'react';
import Navbar from './Navbar';

const ReserveVenue = () => {
  useEffect(() => {
    // Redirect to Qudify after a short delay to allow the navbar to render
    const timer = setTimeout(() => {
      window.location.replace('https://qudify.co/');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div>
      <Navbar /> {/* Include the Navbar */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Redirecting to Qudify...</p>
      </div>
    </div>
  );
};

export default ReserveVenue;
