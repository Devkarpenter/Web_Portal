import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/Register';
import ForgotPass from './components/forgotPass/ForgotPass';
import Main from './pages/main/Main';
import DashBoard from './pages/UserDashBoard/DashBoard';
import Apply from './pages/applyPage/Apply';
import Admin from './pages/adminDashBoard/Admin';
import OperationDashboard from './pages/OperationDashBoard/OperationDashBoard';
import ManageEmploye from './pages/ManageEmploye/ManageEmploye';
import ManageClient from './pages/ManageClient/ManageClient';
import ReviewRequests from './pages/ReviewRequest/ReviewRequest';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ContactPage from './pages/contactPage/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path='/contact' element={<ContactPage/>} />  
        <Route path="/main" element={<Main />} />
        <Route path="/user-dashboard" element={<DashBoard />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/operation" element={<OperationDashboard />} />
        <Route path="/admin/employees" element={<ManageEmploye />} />
        <Route path="/admin/clients" element={<ManageClient />} />
        <Route path="/admin/requests" element={<ReviewRequests />} />
        <Route path="/operation/requests" element={<ReviewRequests />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;




