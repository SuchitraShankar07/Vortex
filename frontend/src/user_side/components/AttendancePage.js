import React, { useState } from "react";
import GenerateQR from "./GenerateQR";
import ScanQR from "./ScanQR";
import Navbar from "./Navbar";

function AttendancePage() {
  const [UserId, setUserId] = useState("");
  const [eventId, setEventId] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = async () => {
    if (UserId.trim() === "" || eventId.trim() === "") {
      alert("Please enter both Reference Number and Event ID.");
      return;
    }

 
    try {
      const response = await fetch("http://localhost:5000/api/attendance/mark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({
          eventId,
          userId: UserId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Attendance marked successfully:", data);
        alert("Attendance marked successfully");
        setShowQR(true); 
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (err) {
      console.error("Error submitting attendance:", err);
      alert("Failed to mark attendance. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="attendance-page"
        style={{
          backgroundColor: "#121212",
          color: "#ffffff",
          minHeight: "100vh",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#ffffff", textAlign: "center" }}>Student Attendance</h2>
        <div className="qr-section" style={{ textAlign: "center" }}>
          <input
            type="text"
            placeholder="Enter Reference Number"
            value={UserId}
            onChange={(e) => {
              setUserId(e.target.value);
              setShowQR(false);
            }}
            className="input-field"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #333",
              backgroundColor: "#333",
              color: "#ffffff",
              marginBottom: "15px",
              width: "300px",
            }}
          />
          <input
            type="text"
            placeholder="Enter Event ID"
            value={eventId}
            onChange={(e) => {
              setEventId(e.target.value);
              setShowQR(false);
            }}
            className="input-field"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #333",
              backgroundColor: "#333",
              color: "#ffffff",
              marginBottom: "15px",
              width: "300px",
            }}
          />
          <button
            onClick={handleGenerateQR}
            className="generate-button"
            style={{
              backgroundColor: "#00aced",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              width: "300px",
              marginBottom: "20px",
            }}
          >
            Mark Attendance
          </button>
          {showQR && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              <GenerateQR referenceNumber={UserId} eventId={eventId} />
            </div>
          )}
        </div>
        <div style={{ marginTop: "30px" }}>
          <ScanQR />
        </div>
      </div>
    </div>
  );
}

export default AttendancePage;
