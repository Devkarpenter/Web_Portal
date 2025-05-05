import React, { useState } from 'react';
import Client from '../../components/ClientCompo/Client';
import Header from '../../components/header/Header';
import './ManageClient.css'; // using same styling

const ManageClient = () => {
  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210' }
  ]);

  const [removedClients, setRemovedClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRemove = (id) => {
    const removed = clients.find(client => client.id === id);
    setRemovedClients([...removedClients, removed]);
    const updated = clients.filter(client => client.id !== id);
    setClients(updated);
  };

  const handleAdd = () => {
    const name = prompt("Enter client name:");
    const email = prompt("Enter client email:");
    const phone = prompt("Enter client phone:");
    const id = Date.now();
    if (name && email && phone) {
      setClients([...clients, { id, name, email, phone }]);
    }
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header isDashboard={true} />
      <div className="manage-employees-container">
        <div className="left-pane">
          <div className="manage-header">
            <h2>Manage Clients</h2>
            <button className="add-btn" onClick={handleAdd}>➕ Add Client</button>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="🔍 Search by name..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Display Filtered Clients */}
          {filteredClients.map((client) => (
            <Client
              key={client.id}
              client={client}
              onRemove={() => handleRemove(client.id)}
            />
          ))}
        </div>

        <div className="right-pane">
          <h3>🗑 Removed Clients</h3>
          {removedClients.length === 0 ? (
            <p>No clients removed yet.</p>
          ) : (
            <ul className="removed-list">
              {removedClients.map((client) => (
                <li key={client.id}>{client.name} ({client.email})</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageClient;
