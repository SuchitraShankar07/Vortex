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
    <div className="registration-form">
      <h2>Register for {formData.event}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <button onClick={handlePayment} className="payment-button">
        Proceed to Payment
      </button>
    </div>
  );
}

export default EventRegistration;

