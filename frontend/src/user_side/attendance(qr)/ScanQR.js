import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function ScanQR() {
  const [data, setData] = useState('');

  const handleScan = (result) => {
    if (result) {
      setData(result);
      logAttendance(result);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const logAttendance = async (referenceNumber) => {
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
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p style={{ color: '#e0e0e0' }}>Scanned Data: {data}</p>
    </div>
  );
}

export default ScanQR;
