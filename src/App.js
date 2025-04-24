// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/Register';
import ForgotPass from './components/forgotPass/ForgotPass';
import Main from './pages/main/Main';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
