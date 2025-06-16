import React, { useState } from 'react';
import Header from '../../components/header/Header';
import './Admin.css';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header isDashboard={true} />

      <div id="AdminDashboard" className={`dashboard-layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>☰</button>

        <aside className="sidebar">
          <ul>
            <li><a href="/admin/employees">👤 Manage Users</a></li>
            <li><a href="/admin/clients">🏫 Manage Clients</a></li>
            <li><a href="/admin/requests">📬 Review Requests</a></li>
            <li><a href="/login">🚪 Logout</a></li>
          </ul>
        </aside>

        <main className="dashboard-content">
          <h1>Welcome, Admin!</h1>
          <p>Select a menu option from the sidebar.</p>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
