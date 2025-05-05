// src/pages/operation/OperationDashboard.jsx

import React, { useState } from 'react';
import Header from '../../components/header/Header';
import '../adminDashBoard/Admin.css'; // ✅ Reuse the same CSS

const OperationDashboard = () => {
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
            <li><a href="/operation/applications">📂 View Applications</a></li>
            <li><a href="/operation/tasks">🛠️ Assign Tasks</a></li>
            <li><a href="/operation/status">📊 Track Progress</a></li>
            <li><a href="/login">🚪 Logout</a></li>
          </ul>
        </aside>

        <main className="dashboard-content">
          <h1>Welcome, Operations!</h1>
          <p>Select a menu option from the sidebar.</p>
        </main>
      </div>
    </>
  );
};

export default OperationDashboard;
