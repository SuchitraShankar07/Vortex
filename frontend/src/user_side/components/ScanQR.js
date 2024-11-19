import React, { useState, useRef } from 'react';
import QrScanner from 'react-qr-scanner';

function ScanQR() {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const qrScannerRef = useRef(null);  

  const handleScan = (result) => {
    if (result) {
      setData(result.text);
      window.location.href = result.text; 
    }
  };

  const handleError = (err) => {
    setError('Error during scanning. Please try again.', err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="scan-qr">
      <h3>Scan QR Code</h3>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        ref={qrScannerRef}  
        style={previewStyle}
      />
      {error && <p>{error}</p>}
      <p>Scanned Data: {data}</p>
    </div>
  );
}

export default ScanQR;
