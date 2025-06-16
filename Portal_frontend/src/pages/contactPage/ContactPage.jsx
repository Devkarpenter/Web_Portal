import React, { useState } from "react";
import './ContactPage.css';
import Header from "../../components/header/Header";

const ContactPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
    <Header/>
    <div id="ContactPage" className={isSidebarOpen ? "sidebar-open" : ""}>
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Sidebar Menu</h2>
        <ul>
          <li>Dashboard</li>
          <li>Messages</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Sidebar toggle button */}
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Contact Form Content */}
      <div className="contact-container">
        <div className="contact-box">
          <h2 className="contact-title">Contact Us</h2>
          <form className="contact-form">
            <div>
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <label>Message</label>
              <textarea rows="5" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
