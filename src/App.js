// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/Register';
import ForgotPass from './components/forgotPass/ForgotPass';
import Main from './pages/main/Main';
import DashBoard from './pages/UserDashBoard/DashBoard';
import Apply from './pages/applyPage/Apply';
import Admin from '../src/pages/adminDashBoard/Admin'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path='/main' element={<Main />} />
        <Route path='/user-dashboard' element={<DashBoard />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
