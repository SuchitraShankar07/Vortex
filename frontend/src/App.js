import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import ContactPage from './components/ContactPage/ContactPage';
import Register from './components/UserLogin/Register';
import clubMain from './Club/clubMain'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <LoginPage />
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
</div>
  );
}

export default App;

