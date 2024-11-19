import React, { useState, useEffect } from "react";
import './Userstyle.css'
import Navbar from "./Navbar";
const UserDetailsPage = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
   
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/6739c1e27bda3a5cdcdcaca6`);
        if (!response.ok) throw new Error("Failed to fetch user details");
        const data = await response.json();
        setUser(data);
        setFormData(data);
      } catch (err) {
        console.error(err);
        alert("Error loading user details");
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/6739c1e27bda3a5cdcdcaca6`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update user details");
      const updatedUser = await response.json();
      setUser(updatedUser);
      setIsEditing(false);
      alert("User details updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating user details");
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
        <Navbar />
      <h1>User Details</h1>
      {isEditing ? (
        <div>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            SRN:
            <input
              type="text"
              name="SRN"
              value={formData.SRN}
              disabled
            />
          </label>
          <button onClick={handleSaveChanges}>Save Changes</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>SRN:</strong> {user.SRN}</p>
          <p><strong>Booked Events:</strong> {user.bookedEvents.map((event) => event.name).join(", ")}</p>
          <p><strong>Attended Events:</strong> {user.attendedEvents.map((attendance) => attendance.name).join(", ")}</p>
          <button onClick={() => setIsEditing(true)}>Edit Details</button>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;
