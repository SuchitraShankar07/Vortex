
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Footer from './Components/Footer'; 
import Navbar from './Components/Navbar';
import LoadingScreen from './Components/LoadingScreen';
import UserLogin from './Components/UserLogin';
import ClubLogin from './Components/ClubLogin';

function LoginPage() {
  const [activeSection, setActiveSection] = useState('user');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
            <h2>User Login</h2>
            <UserLogin navigate={navigate} />
          </div>
        </motion.div>

     
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
            <h2>Club Login</h2>
            <ClubLogin navigate={navigate} />
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
