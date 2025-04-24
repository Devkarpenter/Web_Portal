import React from 'react'
import './Register.css'

// import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='form-container'>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder="Username" required />
            <input type="text" placeholder="Company Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Gender" required />
            <input type="text" placeholder="Country" required />
            <input type="text" placeholder="City" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
        
        <p>By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
      
    </div>
  )
}

export default SignUp
