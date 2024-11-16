import React, { useState } from 'react';
import GenerateQR from './GenerateQR'; // Assuming GenerateQR component is already defined
import ScanQR from './ScanQR'; // Assuming ScanQR component is already defined

function AttendancePage() {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [eventId, setEventId] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    if (referenceNumber.trim() === '' || eventId.trim() === '') {
      alert('Please enter both Reference Number and Event ID.');
    } else {
      setShowQR(true);
    }
  };

  return (
    <div
      className="attendance-page"
      style={{
        backgroundColor: '#121212',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ color: '#ffffff', textAlign: 'center' }}>Student Attendance</h2>
      <div className="qr-section" style={{ textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Enter Reference Number"
          value={referenceNumber}
          onChange={(e) => {
            setReferenceNumber(e.target.value);
            setShowQR(false); // Hide QR when inputs change
          }}
          className="input-field"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #333',
            backgroundColor: '#333',
            color: '#ffffff',
            marginBottom: '15px',
            width: '300px',
          }}
        />
        <input
          type="text"
          placeholder="Enter Event ID"
          value={eventId}
          onChange={(e) => {
            setEventId(e.target.value);
            setShowQR(false); // Hide QR when inputs change
          }}
          className="input-field"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #333',
            backgroundColor: '#333',
            color: '#ffffff',
            marginBottom: '15px',
            width: '300px',
          }}
        />
        <button
          onClick={handleGenerateQR}
          className="generate-button"
          style={{
            backgroundColor: '#00aced',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            width: '300px',
            marginBottom: '20px',
          }}
        >
          Generate QR
        </button>
        {showQR && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <GenerateQR referenceNumber={referenceNumber} eventId={eventId} />
          </div>
        )}
      </div>
      <div style={{ marginTop: '30px' }}>
        <ScanQR /> {/* Assuming ScanQR component is ready to handle QR scanning */}
      </div>
    </div>
  );
}

export default AttendancePage;
