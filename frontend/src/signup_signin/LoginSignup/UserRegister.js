// UserRegister.js
import React from 'react';
import { motion } from 'framer-motion';

function UserRegister() {
  return (
    <motion.div
      className="form-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>User Register</h2>
      <p>Fill in your details to register.</p>
      <motion.button
        className="toggle"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Register
      </motion.button>
    </motion.div>
  );
}

export default UserRegister;
