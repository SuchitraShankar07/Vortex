import React, { useState, useEffect } from 'react';
import './register.css';

const RegistrationForm = (props) => {
  const [formData, setFormData] = useState({
    SRN: `${props.SRNValue}`,
    fullName: `${props.fullNameValue}`,
    email: `${props.emailValue}`,
    phone: `${props.phoneValue}`,
    password: `${props.passwordValue}`,
    repassword: '',
  });
  const [readonly, setReadOnly] = useState(false);
  const [title, setTitle] = useState("User Registration");
  const [buttonTitle, setButtonTitle] = useState("Register");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      SRN: `${props.usernameValue}`,
      fullName: `${props.fullNameValue}`,
      email: `${props.emailValue}`,
      phone: `${props.phoneValue}`,
      password: `${props.passwordValue}`,
      repassword: '',
    });
    if (props.action === "update") {
      setReadOnly(true);
      setTitle("Edit Profile");
      setButtonTitle("Update");
    }
  }, [props]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (formData.SRN.includes(' ')) {
      validationErrors.SRN = 'Username should not contain spaces';
    }

    if (formData.fullName.length < 3) {
      validationErrors.fullName = 'Full Name must have at least 3 characters';
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = 'Phone number should consist of 10 digits';
    }

    if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.repassword) {
      validationErrors.repassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const userData = {
      username: formData.username,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    if (props.action === "create") {
      fetch('https://eventhub-t514.onrender.com/eventRoute/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((res) => {
          if (res.status === 200) {
            alert("User created successfully");
            window.location.reload();
          } else {
            return Promise.reject();
          }
        })
        .catch((err) => alert(err));
    } else if (props.action === "update") {
      userData.bookedEvents = props.bookedEventsValue;

      Promise.all([
        fetch(`https://eventhub-t514.onrender.com/eventRoute/update-user/${props.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
          .then((response) => {
            if (response.status === 200) {
              alert('User updated successfully');
            } else {
              return Promise.reject();
            }
          })
          .catch((error) => {
            console.error('Error updating user:', error);
          }),

        fetch("https://eventhub-t514.onrender.com/eventRoute/event-list")
          .then((res) => res.json())
          .then((eventResponse) => {
            if (eventResponse) {
              const collectedEvents = eventResponse;
              collectedEvents.forEach((eventData) => {
                eventData.registeredUsers = eventData.registeredUsers.filter(
                  (user) => user.username !== userData.username
                );
                eventData.registeredUsers.push({
                  username: userData.username,
                  fullName: userData.fullName,
                  email: userData.email,
                  phone: userData.phone,
                });

                fetch(`https://eventhub-t514.onrender.com/eventRoute/update-event/${eventData._id}`, {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(eventData),
                })
                  .then((updateResponse) => {
                    if (updateResponse.status === 200) {
                      console.log("Event details updated");
                    } else {
                      return Promise.reject();
                    }
                  })
                  .catch((updateError) => alert(updateError));
              });
            }
          }),
      ]);
    }
  };

  return (
    <div className="registration-container">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            readOnly={readonly}
          />
          {errors.username && <span className="register-error">{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <span className="register-error">{errors.fullName}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="register-error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="phone">Phone No:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span className="register-error">{errors.phone}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="register-error">{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="repassword">Confirm Password:</label>
          <input
            type="password"
            id="repassword"
            name="repassword"
            value={formData.repassword}
            onChange={handleChange}
            required
          />
          {errors.repassword && <span className="register-error">{errors.repassword}</span>}
        </div>

        <button className="button" type="submit">{buttonTitle}</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
