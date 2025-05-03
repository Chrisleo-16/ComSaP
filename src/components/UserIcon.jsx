import React, { useState } from 'react';

const UserIcon = ({ user, handleLogout }) => {
  const [hover, setHover] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(prev => !prev);
  };

  return (
    <div
      id='user-icon'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        textAlign: 'center',
        cursor: "pointer",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#4285F4",
        color: "#fff",
        lineHeight: "50px",
        position: "relative",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {user.firstName[0]}{user.lastName[0]}
      
      {hover && (
        <div
          style={{
            position: "absolute",
            top: '60px',
            left: '50%',
            transform: "translateX(-50%)",
            backgroundColor: '#fff',
            color: "#000",
            padding: "5px 10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            zIndex: 2,
            whiteSpace: 'nowrap',
          }}
        >
          {user.firstName} {user.lastName}
        </div>
      )}
      
      {hover && (
        <div
          onClick={toggleDashboard}
          style={{
            position: 'absolute',
            top: '80px',
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#f8f9fa",
            color: "#333",
            padding: "5px 10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 1,
            marginTop: '5px',
          }}
        >
          Dashboard
        </div>
      )}
      
      {showDashboard && (
        <div style={{
          position: 'absolute',
          top: '120px',
          left: '50%',
          transform: "translateX(-50%)",
          backgroundColor: '#fff',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          zIndex: 3,
        }}>
          <h3>Dashboard</h3>
          <p>Welcome to your dashboard!</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default UserIcon;