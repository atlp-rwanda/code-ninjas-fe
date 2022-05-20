import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Welcome from './components/Welcome';
import AboutPage from './components/about/About';
import TripRequest from './components/request/Table';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="triprequest" element={<TripRequest />} />
    </Routes>
  );
}

export default App;
