import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const [srn, setSrn] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateInputs = () => {
    if (srn.length !== 13) {
      setError("SRN must be exactly 13 characters.");
      return false;
    }
    if (password.trim().length === 0) {
      setError("Password cannot be empty.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    
  
      try {
          const response = await fetch('http://localhost:5000/api/user/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ SRN: srn.toLowerCase(), password }),  // SRN in lowercase
          });
  
          const data = await response.json();
  
          if (response.ok) {
              navigate('/user/dashboard'); // Redirect to the user dashboard on success
          } else {
              setError(data.message || 'Invalid credentials.');
          }
      } catch (err) {
          setError('Unable to connect to the server. Please try again.');
      
  };
  
  };

  return (
    <motion.div
      className="form-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Welcome Back!</h2>
      <p>Enter your credentials to dive in.</p>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="SRN"
          value={srn}
          onChange={(e) => {
            setSrn(e.target.value);
            if (error) setError(""); 
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError("");
          }}
          required
        />
        <motion.button
          className="toggle"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </form>
      <p>
        Don't have an account?{" "}
        <motion.span
          className="link"
          onClick={() => navigate("/user/register")}
          whileHover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Register
        </motion.span>
      </p>
    </motion.div>
  );
}

export default UserLogin;
