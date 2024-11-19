import React, { useState } from 'react';

function EventRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: 'Music Festival',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful!');
  };

  const handlePayment = () => {
    
    window.open('https://www.pesuacademy.com/Academy/', '_blank');
  };

  return (
    <div
      style={{
        backgroundColor: '#121212',
        color: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        transition: 'background-color 0.5s ease',
      }}
    >
      <div
        style={{
          backgroundColor: '#1c1c1c',
          padding: '30px',
          borderRadius: '10px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#00aced', marginBottom: '20px' }}>Event Registration</h1>
        <h2 style={{ color: '#00aced', marginBottom: '30px' }}>
          Register for {formData.event}
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            animation: 'fadeIn 0.5s ease',
            width: '100%',
          }}
        >
          <label style={{ color: '#ffffff', fontSize: '1rem' }}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#333',
                color: '#ffffff',
                fontSize: '1rem',
                transition: 'background-color 0.3s ease',
                outline: 'none',
              }}
            />
          </label>

          <label style={{ color: '#ffffff', fontSize: '1rem' }}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #333',
                backgroundColor: '#333',
                color: '#ffffff',
                fontSize: '1rem',
                transition: 'background-color 0.3s ease',
                outline: 'none',
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              backgroundColor: '#00aced',
              color: '#ffffff',
              padding: '15px 20px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              fontSize: '1.1rem',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            Register
          </button>
        </form>

        <button
          onClick={handlePayment}
          style={{
            backgroundColor: '#444',
            color: '#00aced',
            padding: '15px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            marginTop: '20px',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            fontSize: '1.1rem',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default EventRegistration;
