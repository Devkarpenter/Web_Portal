import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <h1>Header</h1>
        <nav>
            <ul>
            
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Header
