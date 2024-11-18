import React, { useState } from "react";
import './ClubProfile.css';

const ClubProfile = () => {
    const [profile, setProfile] = useState({
      clubName: '',
      headName: '',
      email: '',
      instagram: '',
      domain: '',
      campus: 'RR', // Default to RR
    });

    const handleChange = (e) => {
      setProfile({
        ...profile,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Club Profile:', profile);
      // You can handle the form submission (e.g., save data to a database)
    };

    return (
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

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    );
  };

  export default ClubProfile;
