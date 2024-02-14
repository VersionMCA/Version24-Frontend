import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import EventsPage from './pages/EventsPage/EventsPage';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter path="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
