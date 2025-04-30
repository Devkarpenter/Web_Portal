import React from 'react'
import Header from '../header/Header'

const ForgotPass = () => {
  return (
    <>
    <Header isForgotPage={true}/>
    <div className='form-container'>
        <h1>Forgot Password</h1>
        <form>
            <input type="email" placeholder="Email" required />
            <button type="submit">Send Reset Link</button>
        </form>
        <p>Remembered your password? <a href="/login">Login</a></p>
        <p>Don't have an account? <a href="/register">Register</a></p>
      
    </div>
    </>
  )
}

export default ForgotPass
