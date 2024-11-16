import React, { useEffect } from 'react';

const ReserveVenue = () => {
  useEffect(() => {
    // Redirect to the external site
    window.location.replace('https://qudify.co/'); // Use replace to avoid back navigation to this page
  }, []); // The empty dependency array ensures this runs only once when the component is mounted

  return (
    <div>
      <p>Redirecting to Qudify...</p>
    </div>
  );
};

export default ReserveVenue;
