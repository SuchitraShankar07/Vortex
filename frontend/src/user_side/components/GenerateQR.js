import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function GenerateQR({ referenceNumber, eventId }) {
  if (!referenceNumber || !eventId) return null;

  // Construct the URL with query parameters
  const qrValue = `http://localhost:3001/attendance/?srn=${encodeURIComponent(referenceNumber)}&eventId=${encodeURIComponent(eventId)}`;

  return (
    <div className="qr-code">
      <h3 style={{ color: '#007bff' }}>QR Code for {referenceNumber} and Event ID {eventId}</h3>
      <QRCodeCanvas value={qrValue} size={150} bgColor="#ffffff" fgColor="#007bff" />
    </div>
  );
}

export default GenerateQR;
