import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MarkAttendance.css'; // Import the CSS file

function MarkAttendance() {
  const [srn, setSrn] = useState('');
  const [eventId, setEventId] = useState('');
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scannedSrn = params.get('srn');
    const scannedEventId = params.get('eventId');

    if (scannedSrn && scannedEventId) {
      setSrn(scannedSrn);
      setEventId(scannedEventId);
    }
  }, [location]);

  const markAttendance = () => {
    if (!srn || !eventId) {
      alert('Missing SRN or Event ID');
      return;
    }

    setAttendanceMarked(true);
    alert(`Attendance marked for SRN: ${srn} and Event ID: ${eventId}`);
  };

  return (
    <div className="mark-attendance-page">
      <h2>Mark Attendance</h2>
      <div className="attendance-info">
        <p>
          <strong>SRN:</strong> {srn || 'Not available'}
        </p>
        <p>
          <strong>Event ID:</strong> {eventId || 'Not available'}
        </p>
      </div>
      <button onClick={markAttendance} className="mark-attendance-btn">
        Mark Attendance
      </button>
      {attendanceMarked && (
        <div className="success-message">Attendance successfully marked!</div>
      )}
      <button onClick={() => navigate('/attendance')} className="go-back-btn">
        Go Back
      </button>
    </div>
  );
}

export default MarkAttendance;
