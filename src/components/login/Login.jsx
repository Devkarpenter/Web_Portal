import React, { useState } from 'react';
import './Login.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Login = () => {
  const [activeView, setActiveView] = useState("login");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header islogPage={true} />

      <div id="LoginPage" className={`dashboard-layout ${sidebarOpen ? "sidebar-open" : ""}`}>

      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>☰</button>
        

        
        <aside className="sidebar">
          <ul>
            <li><a href="/main">📖 About Us</a></li>
            <li><a href="/main">📞 Contact</a></li>
            <li><a href="/register">📝 Register</a></li>
            <li><a href="/forgot-password">🔑 Forgot Password</a></li>
          </ul>
        </aside>

        <main className="dashboard-content">
          <div className="form-container">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register</a></p>
            <p>Forgot your password? <a href="/forgot-password">Reset Password</a></p>
          </div>
        </main>
      </div>

      <Footer/>
    </>
  );
};

export default Login;
