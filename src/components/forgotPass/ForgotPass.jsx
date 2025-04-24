import React from 'react'

const ForgotPass = () => {
  return (
    <div className='form-container'>
        <h1>Forgot Password</h1>
        <form>
            <input type="email" placeholder="Email" required />
            <button type="submit">Send Reset Link</button>
        </form>
        <p>Remembered your password? <a href="/login">Login</a></p>
        <p>Don't have an account? <a href="/register">Register</a></p>
      
    </div>
  )
}

export default ForgotPass
