import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';

import './styles/global.scss';
import Register from './pages/Auth/Register';

function App() {
  return (
    <BrowserRouter path="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
