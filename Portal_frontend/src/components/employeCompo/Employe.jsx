import React from 'react';
import './Employe.css';

const Employe = ({ name, email, role, onRemove }) => {
  return (
    <div className="employee-card">
      <div className="employee-info">
        <h4>{name}</h4>
        <p>{email}</p>
        <span className="role-badge">{role}</span>
      </div>
      <button className="remove-btn" onClick={onRemove}>🗑 Remove</button>
    </div>
  );
};

export default Employe;
