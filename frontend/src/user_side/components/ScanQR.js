import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function ScanQR() {
  const [data, setData] = useState('');

  // Handle the scanning result
  const handleScan = (result) => {
    if (result && result.text) {
      setData(result.text);
      logAttendance(result.text); // Pass the scanned result to the attendance logging function
    }
  };

  const handleError = (error) => {
    console.error('Error during scanning:', error);
  };

  const logAttendance = async (referenceNumber) => {
    // Simulate logging attendance
    console.log(`Logging attendance for reference number: ${referenceNumber}`);
    alert(`Attendance logged for ${referenceNumber}`);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="scan-qr">
      <h3 style={{ color: '#007bff' }}>Scan QR Code</h3>
      {/* The QR scanner component */}
      <QrScanner
        delay={300} // Adjust the scanning delay as needed
        style={previewStyle}
        onError={handleError} // Handle any errors during scanning
        onScan={handleScan}   // Call handleScan when a QR code is detected
      />
      <p style={{ color: '#e0e0e0' }}>Scanned Data: {data}</p>
    </div>
  );
}

export default ScanQR;
