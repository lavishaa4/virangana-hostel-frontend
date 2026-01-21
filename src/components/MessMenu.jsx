// src/components/MessMenu.jsx
import React from 'react';

function MessMenu() {
  const menuData = [
    { day: "Monday", breakfast: "Aloo Paratha", lunch: "Rajma Chawal", dinner: "Egg Curry" },
    { day: "Tuesday", breakfast: "Poha", lunch: "Kadhi Chawal", dinner: "Mix Veg" },
    { day: "Wednesday", breakfast: "Sandwich", lunch: "Dal Makhani", dinner: "Paneer" },
    { day: "Thursday", breakfast: "Idli Sambar", lunch: "Aloo Jeera", dinner: "Chicken/Soy" },
    { day: "Friday", breakfast: "Puri Sabzi", lunch: "Chole Bhature", dinner: "Fried Rice" },
  ];

  const cellStyle = { padding: '12px', borderBottom: '1px solid #ddd' };

  return (
    <div style={{ marginTop: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
      <div style={{ backgroundColor: '#800000', color: 'white', padding: '15px' }}>
        <h3 style={{ margin: 0 }}>Weekly Mess Menu</h3>
      </div>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '12px' }}>Day</th>
            <th style={{ padding: '12px' }}>Breakfast</th>
            <th style={{ padding: '12px' }}>Lunch</th>
            <th style={{ padding: '12px' }}>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {menuData.map((item) => (
            <tr key={item.day}>
              <td style={cellStyle}><strong>{item.day}</strong></td>
              <td style={cellStyle}>{item.breakfast}</td>
              <td style={cellStyle}>{item.lunch}</td>
              <td style={cellStyle}>{item.dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MessMenu;