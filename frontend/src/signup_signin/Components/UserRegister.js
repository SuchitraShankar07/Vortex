import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function UserRegister() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    SRN: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const validateInputs = () => {
    const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^\d{10}$/;
    const srnRegex = /^.{13}$/; 

    if (formData.fullName.trim().length < 3) {
      setError('Full name must be at least 3 characters long.');
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setError('Invalid email format.');
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      setError('Phone number must be exactly 10 digits.');
      return false;
    }
    if (!srnRegex.test(formData.SRN)) {
      setError('SRN must be exactly 13 characters long.');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    setError('');
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setSuccess('Registration successful! Redirecting...');
        setTimeout(() => {
          setSuccess('');
          navigate('/user/dashboard');
        }, 2000); // Redirect to login page after 2 seconds
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Unable to connect to the server. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  return (
    <motion.div
      className="form-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>User Register</h2>
      <p>Fill in your details to register.</p>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        /><br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="SRN"
          placeholder="SRN"
          value={formData.SRN}
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        /><br />
        <motion.button
          className="toggle"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register
        </motion.button>
      </form>
      <p>
        Already have an account?{' '}
        <motion.span
          className="link"
          onClick={() => navigate('/')}
          whileHover={{ textDecoration: 'underline', cursor: 'pointer' }}
        >
          Login
        </motion.span>
      </p>
    </motion.div>
  );
}

export default UserRegister;
