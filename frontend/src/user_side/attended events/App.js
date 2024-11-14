// App.js
import React from "react";
import AttendedEvents from "./AttendedEvents";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="header">Attended Events</h1>
      <AttendedEvents />
    </div>
  );
}

export default App;
