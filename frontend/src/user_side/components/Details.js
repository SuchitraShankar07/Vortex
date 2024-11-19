import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Details.css'; // Add basic external CSS here

function Details() {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); // Assume userId is stored in localStorage upon login/register

  useEffect(() => {
    if (!userId) {
      setError('User not logged in.');
      setLoading(false);
      return;
    }
    // Fetch user details
    fetch(`http://localhost:5000/api/user/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setUserDetails(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch user details.');
        setLoading(false);
      });
  }, [userId]);

  const handleUpdate = () => {
    fetch(`http://localhost:5000/api/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(userDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          alert('User details updated successfully!');
        }
      })
      .catch(() => setError('Failed to update user details.'));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      fetch(`http://localhost:5000/api/user/${userId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            alert('Account deleted successfully.');
            localStorage.clear();
            navigate('/user/login'); // Redirect to login page
          }
        })
        .catch(() => setError('Failed to delete account.'));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="details-page">
      <h2>Your Details</h2>
      <div className="details-form">
        <label>
          Full Name:
          <input
            type="text"
            value={userDetails.fullName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, fullName: e.target.value })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={userDetails.phone}
            onChange={(e) =>
              setUserDetails({ ...userDetails, phone: e.target.value })
            }
          />
        </label>
        <label>
          SRN:
          <input type="text" value={userDetails.SRN} disabled />
        </label>
        <button onClick={handleUpdate}>Update</button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete Account
        </button>
      </div>
      <button className="back-btn" onClick={() => navigate('/user/dashboard')}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Details;
