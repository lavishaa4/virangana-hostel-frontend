// src/components/NoticeBoard.jsx
import React from 'react';

function NoticeBoard() {
  const notices = [
    { id: 1, title: "Hostel Fee Submission Deadline Extended", date: "22 Jan, 2026", isNew: true },
    { id: 2, title: "Water Supply Maintenance on Sunday", date: "20 Jan, 2026", isNew: true },
    { id: 3, title: "Guest Room Booking Rules Updated", date: "15 Jan, 2026", isNew: false },
    { id: 4, title: "Annual Sports Day Registration Open", date: "10 Jan, 2026", isNew: false },
  ];

  return (
    <div style={{ 
      backgroundColor: 'white', 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '20px', 
      height: 'fit-content',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ marginTop: 0, color: '#800000', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        📢 Notice Board
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {notices.map((notice) => (
          <div key={notice.id} style={{ paddingBottom: '10px', borderBottom: '1px dashed #eee' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#666' }}>{notice.date}</span>
              {notice.isNew && (
                <span style={{ backgroundColor: 'red', color: 'white', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', animation: 'pulse 2s infinite' }}>NEW</span>
              )}
            </div>
            <p style={{ margin: '5px 0 0 0', fontWeight: '500', color: '#333' }}>
              {notice.title}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <button style={{ background: 'none', border: 'none', color: '#800000', textDecoration: 'underline', cursor: 'pointer' }}>
          View All Notices
        </button>
      </div>
    </div>
  );
}

export default NoticeBoard;