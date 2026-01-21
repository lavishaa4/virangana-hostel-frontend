// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '40px 20px',
    marginTop: 'auto', // This helps push it to the bottom
    fontSize: '0.9rem'
  };

  const columnStyle = {
    flex: 1,
    minWidth: '200px',
    marginBottom: '20px'
  };

  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}>
        
        {/* Column 1: Address */}
        <div style={columnStyle}>
          <h3 style={{ color: '#fff', borderBottom: '2px solid #800000', display: 'inline-block', paddingBottom: '5px' }}>Address</h3>
          <p>Virangana LaxmiBai Hostel</p>
          <p>Delhi Technological University</p>
          <p>Shahbad Daulatpur, Bawana Road</p>
          <p>Delhi - 110042</p>
        </div>

        {/* Column 2: Quick Links */}
        <div style={columnStyle}>
          <h3 style={{ color: '#fff', borderBottom: '2px solid #800000', display: 'inline-block', paddingBottom: '5px' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}><Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>Home</Link></li>
            <li style={{ marginBottom: '8px' }}><Link to="/login" style={{ color: '#ccc', textDecoration: 'none' }}>Student Login</Link></li>
            <li style={{ marginBottom: '8px' }}><a href="http://dtu.ac.in" target="_blank" style={{ color: '#ccc', textDecoration: 'none' }}>DTU Official Website</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div style={columnStyle}>
          <h3 style={{ color: '#fff', borderBottom: '2px solid #800000', display: 'inline-block', paddingBottom: '5px' }}>Contact Warden</h3>
          <p><strong>Phone:</strong> 011-27871018</p>
          <p><strong>Email:</strong> vlbh_hostel@dtu.ac.in</p>
          <p><strong>Office Hours:</strong> 10:00 AM - 5:00 PM</p>
        </div>

      </div>
      
      {/* Copyright Line */}
      <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px solid #555', paddingTop: '20px', color: '#888' }}>
        © {new Date().getFullYear()} Virangana LaxmiBai Hostel, DTU. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;