import React from 'react';
import './Footer.css'; // Importing the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>AcoWorlds</h2>

        <nav>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </nav>

        <p className="footer-copy">&copy; 2021 AcoWorlds. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
