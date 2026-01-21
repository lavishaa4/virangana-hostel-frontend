// src/pages/Home.jsx
import React from 'react';
import MessMenu from '../components/MessMenu';
import NoticeBoard from '../components/NoticeBoard'; // 1. Import it

function Home() {
  return (
    <div style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Banner Image */}
      <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <img 
          src="/hostel.jpg" 
          alt="Virangana LaxmiBai Hostel" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      {/* Welcome Text */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#800000', margin: '0 0 10px 0' }}>Virangana LaxmiBai Hostel</h2>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Welcome to the official residence for students of Delhi Technological University.
        </p>
      </div>

      {/* MAIN CONTENT GRID: Mess Menu + Notice Board */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', // This ensures it stacks on mobile
        gap: '30px', 
        alignItems: 'start' 
      }}>
        
        {/* Left Side: Mess Menu (Takes more space) */}
        <div style={{ flex: 2, minWidth: '300px' }}>
          <MessMenu />
        </div>

        {/* Right Side: Notice Board (Takes less space) */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <NoticeBoard />
        </div>

      </div>
    </div>
  );
}

export default Home;