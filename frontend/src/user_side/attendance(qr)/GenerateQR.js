import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function GenerateQR({ referenceNumber }) {
  if (!referenceNumber) return null;

  return (
    <div className="qr-code">
      <h3 style={{ color: '#007bff' }}>QR Code for {referenceNumber}</h3>
      <QRCodeCanvas value={referenceNumber} size={150} bgColor="#ffffff" fgColor="#007bff" />
    </div>
  );
}

export default GenerateQR;
