import React from 'react'
import './Login.css'
// import { Link } from 'react-router-dom'



const Login = () => {
  return (
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
  )
}

export default Login
