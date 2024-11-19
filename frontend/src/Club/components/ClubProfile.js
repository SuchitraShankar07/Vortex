import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from './Navbar'; // Import Navbar component
import './ClubProfile.css'; // Include CSS for styling

const ClubProfile = () => {
  const [profile, setProfile] = useState({
    clubName: '',
    headName: '',
    email: '',
    instagram: '',
    domain: '',
    campus: 'Ecity',
  });

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Load stored profile from localStorage on mount
  useEffect(() => {
    const storedProfile = localStorage.getItem('clubProfile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Club Profile:', profile);
    localStorage.setItem('clubProfile', JSON.stringify(profile)); // Save profile to localStorage
    alert('Profile updated successfully!');
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('clubProfile'); // Optional: clear profile from localStorage
    navigate('/'); // Redirect to the login page
  };

  return (
    <div>
      <Navbar /> {/* Include Navbar at the top */}
      <div className="club-profile">
        <h2>Club Profile</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="clubName">Club Name</label>
            <input
              type="text"
              name="clubName"
              value={profile.clubName}
              onChange={handleChange}
              placeholder="Enter your club's name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="headName">Head's Name</label>
            <input
              type="text"
              name="headName"
              value={profile.headName}
              onChange={handleChange}
              placeholder="Enter the head's name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your club's email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="instagram">Instagram Handle</label>
            <input
              type="text"
              name="instagram"
              value={profile.instagram}
              onChange={handleChange}
              placeholder="Enter Instagram handle"
            />
          </div>

          <div className="form-group">
            <label htmlFor="domain">Club Domain</label>
            <input
              type="text"
              name="domain"
              value={profile.domain}
              onChange={handleChange}
              placeholder="E.g., Technical, Cultural, Sports"
            />
          </div>

          <div className="form-group">
            <label htmlFor="campus">Campus</label>
            <select
              name="campus"
              value={profile.campus}
              onChange={handleChange}
              required
            >
              <option value="RR">RR Campus</option>
              <option value="Ecity">Ecity Campus</option>
            </select>
          </div>

          <div className="slbtn">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClubProfile;
