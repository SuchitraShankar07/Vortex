// UserLogin.js
import React from 'react';
import { motion } from 'framer-motion';

function UserLogin() {
  return (
    <motion.div
      className="form-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>User Login</h2>
      <p>Enter your credentials to dive in.</p>
      <motion.button
        className="toggle"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Login
      </motion.button>
    </motion.div>
  );
}

export default UserLogin;
