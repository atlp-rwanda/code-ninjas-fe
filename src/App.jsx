import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Welcome from './components/Welcome';
import AboutPage from './components/about/About';
import TripApproval from '../src/views/pages/TripApproval';
import Trip from '../src/views/pages/Trips';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="/trip" element={<Trip />} />
      <Route path="/approval/:id" element={<TripApproval />} />
    </Routes>
  );
}

export default App;
