import React from 'react';
import AttendancePage from './AttendancePage';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#121212', color: '#e0e0e0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#007bff' }}>Vortex Attendance</h1>
        <AttendancePage />
      </div>
    </div>
  );
}

export default App;
