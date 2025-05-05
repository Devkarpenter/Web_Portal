import React from 'react';
import './Client.css';

const Client = ({ client, onRemove }) => {
  return (
    <div className="client-card">
      <h4>{client.name}</h4>
      <p>{client.email}</p>
      <button onClick={() => onRemove(client.id)} className="remove-btn">Remove</button>
    </div>
  );
};

export default Client;
