// src/components/UserCard.jsx
import React from 'react';
import './UserCard.css'; // Assume a simple CSS file for styling

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
};

export default UserCard;