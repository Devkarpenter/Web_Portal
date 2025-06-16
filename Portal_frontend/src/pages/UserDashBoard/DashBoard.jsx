import React, { useState } from 'react';
import './DashBoard.css';
import Header from '../../components/header/Header';
// import Footer from '../../components/footer/Footer';
import Services from '../../components/services/Services';
import UserInfo from '../userInfo/UserInfo';


const DashBoard = () => {
  const [showServices, setShowServices] = useState(false);
  const [activeView, setActiveView] = useState("welcome");

  return (
    <>
      <Header isDashboard={true} />
      <div className="dashboard-layout">
        <aside className="sidebar">
          {/* <h2>Dashboard</h2> */}
          <ul>
            <li>
              <a href="#" onClick={() => setActiveView("user")}>👤 User-Information</a>
            </li>

            <li className="services-dropdown">
              <span onClick={() => setShowServices(!showServices)}>
                🛎️ Services {showServices ? '▲' : '▼'}
              </span>
              <ul className={`submenu ${showServices ? 'open' : ''}`}>
                <li><a href="#" onClick={() => setActiveView("status")}>📊 Service Status</a></li>
                <li><a href="#" onClick={() => setActiveView("all")}>📁 All Services</a></li>
              </ul>
            </li>

            <li>
              <a href="/login">🚪 Logout</a>
            </li>
          </ul>
        </aside>

        <main className="dashboard-content">
          {activeView === "welcome" && (
            <>
              <h1>Welcome to Your Dashboard</h1>
              <p>Select an option from the sidebar to get started.</p>
            </>
          )}

          {activeView === "user" && (
            <>
              <UserInfo/>
            </>
          )}

          {activeView === "status" && (
            <>
              <Services/>
            </>
          )}

          {activeView === "all" && (
            <>
              <Services/>
            </>
          )}
        </main>
      </div>
        
      {/* <Footer /> */}
      
    </>
  );
};

export default DashBoard;