// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUniversity, FaSignInAlt, FaHome } from 'react-icons/fa';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: 'white', 
      padding: '15px 30px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '3px solid #800000', // The accent line
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      position: 'sticky', // Sticks to top
      top: 0,
      zIndex: 1000
    }}>
      
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaUniversity size={28} color="#800000" />
        <h1 style={{ margin: 0, fontSize: '1.4rem', color: '#333', fontWeight: '700' }}>
          <span style={{ color: '#800000' }}>VLB</span> Hostel
        </h1>
      </div>
      
      {/* Links Section */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ 
          color: '#555', textDecoration: 'none', fontWeight: '600', 
          display: 'flex', alignItems: 'center', gap: '5px' 
        }}>
          <FaHome /> Home
        </Link>
        
        <Link to="/login" className="btn-primary" style={{ 
          textDecoration: 'none', padding: '8px 20px', fontSize: '0.9rem',
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <FaSignInAlt /> Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;