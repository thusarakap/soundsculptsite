import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './resources/pages/Home';
import About from './resources/pages/About';
import Contact from './resources/pages/Contact';
import Download from './resources/pages/Download';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<Download />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
