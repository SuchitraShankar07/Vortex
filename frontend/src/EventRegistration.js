import React, { useState } from "react";

function EventRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "Music Festival",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
  };

  const handlePayment = () => {
    window.location.href = "https://www.pesuacademy.com/Academy/";
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', padding: '50px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#00aced', marginBottom: '20px' }}>Event Registration</h1>
      <div style={{ backgroundColor: '#1c1c1c', padding: '30px', borderRadius: '10px', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#00aced' }}>Register for {formData.event}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
          <label style={{ color: '#ffffff' }}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #333',
                backgroundColor: '#333',
                color: '#ffffff',
                marginTop: '5px',
              }}
            />
          </label>
          <label style={{ color: '#ffffff' }}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #333',
                backgroundColor: '#333',
                color: '#ffffff',
                marginTop: '5px',
              }}
            />
          </label>
          <button type="submit" style={{
            backgroundColor: '#00aced',
            color: '#ffffff',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
          }}>
            Register
          </button>
        </form>
        <button onClick={handlePayment} style={{
          backgroundColor: '#444',
          color: '#00aced',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          marginTop: '15px',
        }}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default EventRegistration;


