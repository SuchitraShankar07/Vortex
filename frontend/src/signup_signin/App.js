import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import ClubLogin from './LoginSignup/ClubLogin';
import ClubRegister from './LoginSignup/ClubRegister';
import UserLogin from './LoginSignup/UserLogin';
import UserRegister from './LoginSignup/UserRegister';
import Footer from './LoginSignup/Footer'; 
import Navbar from './LoginSignup/Navbar';
import LoadingScreen from './LoginSignup/LoadingScreen'; 

function LoginPage() {
  const [activeSection, setActiveSection] = useState('user');
  const [isUserRegister, setIsUserRegister] = useState(false);
  const [isClubRegister, setIsClubRegister] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <LoadingScreen />; 
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="container">
        {/* user sec*/}
        <motion.div
          className="section user"
          onMouseEnter={() => setActiveSection('user')}
          animate={{
            flex: activeSection === 'user' ? 3 : 1,
            backgroundColor: activeSection === 'user' ? '#000' : '#333',
            opacity: activeSection === 'user' ? 1 : 0.5,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="form-card">
            {isUserRegister ? <UserRegister /> : <UserLogin />}
          </div>
          
          {/* toggling user section */}
          <div className="toggle-container">
            <button
              className="toggle"
              onClick={() => setIsUserRegister(!isUserRegister)}
            >
              {isUserRegister ? 'Go to Login' : 'Go to Register'}
            </button>
          </div>
        </motion.div>

        {/* club section */}
        <motion.div
          className="section club"
          onMouseEnter={() => setActiveSection('club')}
          animate={{
            flex: activeSection === 'club' ? 3 : 1,
            backgroundColor: activeSection === 'club' ? '#000' : '#222',
            opacity: activeSection === 'club' ? 1 : 0.5,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="form-card">
            {isClubRegister ? <ClubRegister /> : <ClubLogin />}
          </div>

          {/* toggle for club*/}
          <div className="toggle-container">
            <button
              className="toggle"
              onClick={() => setIsClubRegister(!isClubRegister)}
            >
              {isClubRegister ? 'Go to Login' : 'Go to Register'}
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
