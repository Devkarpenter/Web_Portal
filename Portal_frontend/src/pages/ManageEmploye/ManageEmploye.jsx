import React, { useState } from 'react';
import Employe from '../../components/employeCompo/Employe';
import Header from '../../components/header/Header';
import './ManageEmploye.css';

const ManageEmploye = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' }
  ]);

  const [removedEmployees, setRemovedEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRemove = (id) => {
    const removed = employees.find(emp => emp.id === id);
    setRemovedEmployees([...removedEmployees, removed]);
    const updated = employees.filter(emp => emp.id !== id);
    setEmployees(updated);
  };

  const handleAdd = () => {
    const name = prompt("Enter employee name:");
    const email = prompt("Enter employee email:");
    const role = prompt("Enter employee role:");
    const id = Date.now();
    if (name && email && role) {
      setEmployees([...employees, { id, name, email, role }]);
    }
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header isDashboard={true} />
      <div className="manage-employees-container">
        <div className="left-pane">
          <div className="manage-header">
            <h2>Manage Employees</h2>
            <button className="add-btn" onClick={handleAdd}>➕ Add Employee</button>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="🔍 Search by name..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredEmployees.map((emp) => (
            <Employe
              key={emp.id}
              name={emp.name}
              email={emp.email}
              role={emp.role}
              onRemove={() => handleRemove(emp.id)}
            />
          ))}
        </div>

        <div className="right-pane">
          <h3>🗑 Removed Employees</h3>
          {removedEmployees.length === 0 ? (
            <p>No employees removed yet.</p>
          ) : (
            <ul className="removed-list">
              {removedEmployees.map((emp) => (
                <li key={emp.id}>{emp.name} ({emp.email})</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageEmploye;
