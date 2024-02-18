import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import EventsPage from './pages/EventsPage/EventsPage';
import Login from './pages/Auth/Login';
import TeamPage from './pages/TeamPage/TeamPage';
import ForgotPassword from './pages/Auth/ForgotPassword';

import './styles/global.scss';
import Register from './pages/Auth/Register';
import AboutUs from './pages/AboutUs/AboutUs';
import ResetPassword from './pages/Auth/ResetPassword';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <BrowserRouter path="/">
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
