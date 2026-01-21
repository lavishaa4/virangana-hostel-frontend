// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaLock } from 'react-icons/fa'; // Importing icons

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin") {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh' // Centers it vertically
    }}>
      {/* Used the "card" and "fade-in" classes from index.css */}
      <div className="card fade-in" style={{ width: '350px', textAlign: 'center' }}>
        
        {/* DTU Logo Circle */}
        <div style={{ 
          width: '80px', height: '80px', margin: '0 auto 20px', 
          background: '#f8f8f8', borderRadius: '50%', 
          display: 'flex', alignItems: 'center', justifyContent: 'center' 
        }}>
          <img src="/dtu-logo.png" alt="DTU" style={{ width: '50px' }} />
          {/* If you don't have a logo image yet, you can use an Icon: 
              <FaUserGraduate size={40} color="#800000" /> 
          */}
        </div>

        <h2 style={{ color: '#800000', marginBottom: '5px' }}>Welcome Back</h2>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '30px' }}>
          Please sign in to continue
        </p>
        
        {/* Input 1 with Icon */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <FaUserGraduate style={{ position: 'absolute', left: '15px', top: '15px', color: '#888' }} />
          <input 
            type="text" 
            placeholder="Roll Number / Admin ID" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ paddingLeft: '45px', width: '100%', boxSizing: 'border-box' }} // Padding left for icon
          />
        </div>

        {/* Input 2 with Icon */}
        <div style={{ position: 'relative', marginBottom: '25px' }}>
          <FaLock style={{ position: 'absolute', left: '15px', top: '15px', color: '#888' }} />
          <input 
            type="password" 
            placeholder="Password" 
            style={{ paddingLeft: '45px', width: '100%', boxSizing: 'border-box' }} 
          />
        </div>
        
        {/* Modern Button */}
        <button 
          className="btn-primary" // Using the class from CSS
          onClick={handleLogin}
          style={{ width: '100%' }}>
          Sign In
        </button>

      </div>
    </div>
  );
}

export default Login;