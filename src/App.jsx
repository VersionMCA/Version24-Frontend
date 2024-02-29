import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import { UserProvider } from './contexts/UserContext';
import TransitionAnimation from './components/TransitionAnimation/TransitionAnimation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const EventsPage = lazy(() => import('./pages/EventsPage/EventsPage'));
const Login = lazy(() => import('./pages/Auth/Login'));
const TeamPage = lazy(() => import('./pages/TeamPage/TeamPage'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'));
const Register = lazy(() => import('./pages/Auth/Register'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword'));
const EmailConfirmed = lazy(() => import('./pages/Auth/EmailConfirmed'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <BrowserRouter path="/">
      <UserProvider>
        <Suspense fallback={<TransitionAnimation />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/teams" element={<TeamPage />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route
              path="/resetPassword/:resetToken"
              element={<ResetPassword />}
            />

            <Route
              path="/confirmEmail/:emailConfirmToken"
              element={<EmailConfirmed />}
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
