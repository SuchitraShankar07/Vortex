import React, { useEffect } from 'react';

const ReserveVenue = () => {
  useEffect(() => {
    
    window.location.replace('https://qudify.co/'); 
  }, []); 
  return (
    <div>
      <p>Redirecting to Qudify...</p>
    </div>
  );
};

export default ReserveVenue;
