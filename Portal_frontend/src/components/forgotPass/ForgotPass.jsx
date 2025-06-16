import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './ForgotPass.css'; // make sure this file contains the media query CSS like Login.css

const ForgotPass = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <>
      <Header isForgotPage={true} />
      
      <div id="ForgotPage" className={`dashboard-layout ${sidebarOpen ? "sidebar-open" : ""}`}>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>☰</button>

        <aside className="sidebar">
          <ul>
            <li><a href="/main">📖 About Us</a></li>
            <li><a href="/main">📞 Contact</a></li>
            <li><a href="/register">📝 Register</a></li>
            <li><a href="/login">🔐 Login</a></li>
          </ul>
        </aside>

        <main className="dashboard-content">
          <div className="form-container">
            <h1>Forgot Password</h1>
            <form>
              <input type="email" placeholder="Email" required />
              <button type="submit">Send Reset Link</button>
            </form>
            <p>Remembered your password? <a href="/login">Login</a></p>
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </main>
      </div>

      <Footer/>
    </>
  );
};

export default ForgotPass;
