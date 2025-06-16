import React, { useState } from 'react';
import axios from 'axios';
import Header from '../header/Header'
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Assuming you have a CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'client' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registered successfully');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <>
    <Header islogPage={true} />
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="client">Client</option>
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
    </div>
    </>
  );
};

export default Register;