import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import ContactPage from './components/ContactPage/ContactPage';
import Register from './components/UserLogin/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EventSelectionPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/register" element={<EventRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

