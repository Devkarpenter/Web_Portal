import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ isAuthPage, isDashboard,  isForgotPage}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
    document.body.classList.toggle('sidebar-open', !sidebarVisible);
  };

  return (
    <div className="header">
      <h1><Link to="https://acoworlds.com/" className="header-title">AcoWorlds</Link></h1>

      <nav>
        
        <ul className="nav-items">
          {isDashboard ? (
            <>
              <li className='links'><Link to="/main">About Us</Link></li>
              <li className='links'><Link to="/main">Contact</Link></li>
              <Link to="/profile">
                <img src="ISO-1.webp" alt="" className="user-avatar" />
              </Link>
            </>
          ) : isAuthPage ? (
            <>
              <li className='links'><Link to="/login">Login</Link></li>
              {/* <li className='links'><Link to="/register">Register</Link></li> */}
              <li className='links'><Link to="/">Contact</Link></li>
            </>

          ) : isForgotPage ? (

            <>
              <li className='links'><Link to="/login">Login</Link></li>
              <li className='links'><Link to="/register">Register</Link></li>
            </>
          ) : (
            <>
              {/* <li className='links'><Link to="/login">Login</Link></li> */}
              <li className='links'><Link to="/register">Register</Link></li>
              <li className='links'><Link to="/">Contact</Link></li>

            </>
          )
        }
        </ul>
        <div className="menu-toggle" onClick={toggleSidebar}>☰</div>
      </nav>
    </div>
  );
};

export default Header;