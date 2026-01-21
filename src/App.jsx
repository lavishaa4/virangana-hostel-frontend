// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 1. Import Footer

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      {/* This outer div ensures the footer stays at the bottom */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Navbar />
        
        {/* 'flex: 1' makes this section grow to fill empty space */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </div>

        {/* 2. Add Footer here */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;