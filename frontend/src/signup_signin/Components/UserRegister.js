import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './UserRegister.css';

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
        }, 2000); // Redirect to dashboard after 2 seconds
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
      <motion.h2
        className="form-title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'backOut' }}
      >
        Welcome!
      </motion.h2>
      <motion.p
        className="form-subtitle"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Sign up and get started!
      </motion.p>
      {error && <p className="error-msg">{error}</p>}
      {success && <p className="success-msg">{success}</p>}
      <form onSubmit={handleRegister}>
        <motion.input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="input-field"
          whileFocus={{ borderColor: '#40e0d0' }}
          required
        />
        <motion.input
          type="text"
          name="SRN"
          placeholder="SRN"
          value={formData.SRN}
          onChange={handleChange}
          className="input-field"
          whileFocus={{ borderColor: '#40e0d0' }}
          required
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          whileFocus={{ borderColor: '#40e0d0' }}
          required
        />
        <motion.input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
          whileFocus={{ borderColor: '#40e0d0' }}
          required
        />
        <motion.input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="input-field"
          whileFocus={{ borderColor: '#40e0d0' }}
          required
        />
        <motion.input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="input-field"
          whileFocus={{ borderColor: '#40e0d0' }}
          required
        />
        <motion.button
          type="submit"
          className="register-button"
          whileHover={{ scale: 1.1, backgroundColor: '#20b2aa' }}
          whileTap={{ scale: 0.95 }}
        >
          Register
        </motion.button>
      </form>
      <motion.p
        className="login-prompt"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Already have an account?{' '}
        <span className="login-link" onClick={() => navigate('/')}>
          Login
        </span>
      </motion.p>
    </motion.div>
  );
}

export default UserRegister;
