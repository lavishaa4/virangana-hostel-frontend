// src/components/ComplaintBox.jsx
import React, { useState } from 'react';

function ComplaintBox() {
  // 1. State to hold the list of complaints
  const [complaints, setComplaints] = useState([
    { id: 1, type: 'Electrical', description: 'Fan not working in Room B-304', status: 'Pending' },
    { id: 2, type: 'Plumbing', description: 'Tap leaking in washroom', status: 'Resolved' }
  ]);

  // 2. State to hold the new input
  const [newComplaint, setNewComplaint] = useState("");
  const [type, setType] = useState("Electrical");

  // 3. Function to add a new complaint
  const handleAddComplaint = () => {
    if (newComplaint.trim() === "") return; // Don't add empty complaints

    const newItem = {
      id: complaints.length + 1,
      type: type,
      description: newComplaint,
      status: 'Pending' // New complaints are always Pending
    };

    setComplaints([...complaints, newItem]); // Add to the list
    setNewComplaint(""); // Clear the box
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: 'white' }}>
      <h3 style={{ marginTop: 0, color: '#800000' }}>Report an Issue</h3>

      {/* Input Form */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <select 
          value={type} 
          onChange={(e) => setType(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option>Electrical</option>
          <option>Plumbing</option>
          <option>Mess Food</option>
          <option>Internet/Wi-Fi</option>
          <option>Cleanliness</option>
        </select>
        
        <input 
          type="text" 
          placeholder="Describe your issue..." 
          value={newComplaint}
          onChange={(e) => setNewComplaint(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <button 
          onClick={handleAddComplaint}
          style={{ backgroundColor: '#800000', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Submit
        </button>
      </div>

      {/* List of Previous Complaints */}
      <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Your Complaints History</h4>
      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {complaints.length === 0 ? <p style={{ color: '#888' }}>No complaints found.</p> : null}
        
        {complaints.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #f9f9f9', alignItems: 'center' }}>
            <div>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>[{item.type}]</span>
              <span>{item.description}</span>
            </div>
            {/* Status Badge */}
            <span style={{ 
              fontSize: '0.8rem', 
              padding: '4px 8px', 
              borderRadius: '12px', 
              backgroundColor: item.status === 'Resolved' ? '#d4edda' : '#fff3cd', 
              color: item.status === 'Resolved' ? '#155724' : '#856404' 
            }}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComplaintBox;