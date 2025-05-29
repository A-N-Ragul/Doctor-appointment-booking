import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminNavbar.css'; // Assuming you have a CSS file for styling

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-navbar">
      <div className="admin-role-badge">
        <p>Admin Panel</p>
      </div>
      <button onClick={() => navigate('/')} className="logout-button">
        Close
      </button>
    </div>
  );
};

export default AdminNavbar;
