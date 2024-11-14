import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import ContactPage from './components/ContactPage/ContactPage';
import Register from './components/UserLogin/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          {/* General paths */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
