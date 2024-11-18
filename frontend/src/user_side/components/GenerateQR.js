import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function GenerateQR({ referenceNumber, eventId }) {
  if (!referenceNumber || !eventId) return null;

  const url = `http://localhost:3001/attendance/check?srn=${referenceNumber}&eventId=${eventId}`;

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h3 style={{ color: '#007bff' }}>QR Code for SRN: {referenceNumber} and Event ID: {eventId}</h3>
      <QRCodeCanvas
        value={url} // Directly encode the SRN and Event ID in the QR code URL
        size={200}
        bgColor="#ffffff"
        fgColor="#007bff"
      />
    </div>
  );
}

export default GenerateQR;
