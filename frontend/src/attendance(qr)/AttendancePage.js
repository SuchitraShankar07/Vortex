import React, { useState } from 'react';
import GenerateQR from './GenerateQR';
import ScanQR from './ScanQR';

function AttendancePage() {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    if (referenceNumber.trim() !== '') {
      setShowQR(true);
    } else {
      alert('Please enter a reference number.');
    }
  };

  return (
    <div className="attendance-page">
      <h2 style={{ color: '#ffffff' }}>Student Attendance</h2>
      <div className="qr-section">
        <input
          type="text"
          placeholder="Enter Reference Number"
          value={referenceNumber}
          onChange={(e) => {
            setReferenceNumber(e.target.value);
            setShowQR(false); // Hide QR when reference number changes
          }}
          className="input-field"
        />
        <button onClick={handleGenerateQR} className="generate-button">
          Generate QR
        </button>
        {showQR && <GenerateQR referenceNumber={referenceNumber} />}
      </div>
      <ScanQR />
    </div>
  );
}

export default AttendancePage;
