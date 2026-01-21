// src/pages/StudentDashboard.jsx
import React from 'react';
import ComplaintBox from '../components/ComplaintBox'; // 1. Import it

function StudentDashboard() {
  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ color: '#800000', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
        Student Dashboard
      </h2>

      {/* Profile Section  */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1, padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginTop: 0 }}>My Profile</h3>
          <p><strong>Name:</strong> Lavisha</p>
          <p><strong>Roll No:</strong> 24/SE/103</p>
          <p><strong>Room:</strong> B1-610</p>
          <button style={{ marginTop: '10px', padding: '8px 12px', background: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Edit Profile
          </button>
        </div>

        <div style={{ flex: 1, padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginTop: 0 }}>Current Status</h3>
          <p><strong>Mess Fees:</strong> <span style={{ color: 'green' }}>Paid</span></p>
          <p><strong>Active Complaints:</strong> <span style={{ color: 'red' }}>1 Pending</span></p>
          <p><strong>Next Meal:</strong> Lunch (12:30 PM)</p>
        </div>
      </div>

      {/* 2. Add the Complaint Box here */}
      <ComplaintBox />

    </div>
  );
}

export default StudentDashboard;